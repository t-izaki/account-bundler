import React from "react"
import { connect } from "react-redux"
import { change, destroy } from "redux-form"
import { requestCreateAccounts } from "../../redux/modules/account"
import { fetchTasks, inProgressTaskSelector } from "../../redux/modules/task"
import CreateAccountForm from "../../components/SystemUser/createAccountForm"
import { notArchivedSystemSelector, accountNotExistSystemSelector } from "../../redux/modules/systems"

class CreateAccount extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchValue: ""
    }
  }

  componentDidMount() {
    this.handleSearchInputChange()
    this.props.fetchTasks()
  }

  handleItemClick = choicedSystemId_Number => {
    return () => {
      const choicedSystemId = String(choicedSystemId_Number)
      const selectedSystemIds = this.props.selectedSystemIds
      const ids = [...selectedSystemIds].includes(choicedSystemId)
        ? [...selectedSystemIds].filter(sid => sid !== choicedSystemId)
        : [...selectedSystemIds, choicedSystemId]
      this.props.change("accountCreateRequestForAUser", "system_ids", ids)
    }
  }

  handleSearchInputChange = () => {
    this.setState({
      searchValue: event.target.value || ""
    })
  }

  handleSubmitClick = () => {
    event.preventDefault()
    this.props.requestCreateAccounts(this.props.systemUser.id, this.props.formData)
    this.props.destroy("accountCreateRequestForAUser")
  }

  render() {
    const isRequesting = systemId => {
      return Boolean(
        this.props.inProgressTasks.find(t => t.system_user_id === this.props.systemUser.id && t.system_id === systemId)
      )
    }

    const displaySystems = accountNotExistSystemSelector(this.props.systems, this.props.accounts).filter(s =>
      s.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
    )

    return (
      <CreateAccountForm
        systems={displaySystems}
        systemUser={this.props.systemUser}
        selectedSystemIds={this.props.selectedSystemIds}
        searchValue={this.state.searchValue}
        handleSearchInputChange={this.handleSearchInputChange}
        handleItemClick={this.handleItemClick}
        handleSubmitClick={this.handleSubmitClick}
        isRequesting={isRequesting}
      />
    )
  }
}

const mapStateToProps = state => {
  const selectedSystemIds =
    (state.form.accountCreateRequestForAUser &&
      state.form.accountCreateRequestForAUser.values &&
      state.form.accountCreateRequestForAUser.values.system_ids) ||
    []

  return {
    accounts: state.accounts.list,
    inProgressTasks: inProgressTaskSelector(state.tasks.list),
    systems: notArchivedSystemSelector(state.systems.list),
    formData: state.form.accountCreateRequestForAUser && state.form.accountCreateRequestForAUser.values,
    selectedSystemIds
  }
}

export default connect(
  mapStateToProps,
  { requestCreateAccounts, fetchTasks, change, destroy }
)(CreateAccount)
