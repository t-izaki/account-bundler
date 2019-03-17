import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { destroy } from "redux-form"
import { CreateForm, UpdateForm } from "../../components/SystemUser/form"
import { createSystemUser, updateSystemUser } from "../../redux/modules/systemUser"
import { getSystemUserCategories } from "../../redux/modules/systemUserCategory"

class RenderForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fireRedirect: false
    }
  }

  handleSubmit = () => {
    event.preventDefault()
    this.props.newRecord
      ? this.props.createSystemUser(this.props.formData) && this.props.destroy("newSystemUser")
      : this.props.updateSystemUser(this.props.formData)
    this.setState({
      fireRedirect: true
    })
  }

  componentDidMount() {
    this.props.getSystemUserCategories()
  }

  render() {
    if (!this.props.newRecord && this.state.fireRedirect) {
      return <Redirect to={`/systemUsers/${this.props.initialValues.id}`} />
    }

    const component = this.props.newRecord ? (
      <CreateForm
        handleSubmit={this.handleSubmit}
        newRecord={this.props.newRecord}
        systemUserCategories={this.props.systemUserCategories}
      />
    ) : (
      <UpdateForm
        handleSubmit={this.handleSubmit}
        newRecord={this.props.newRecord}
        initialValues={
          this.props.initialValues && {
            ...this.props.initialValues,
            system_user_category_id: String(this.props.initialValues.system_user_category_id) //文字列にしないとredux-formが動作しない
          }
        }
        systemUserCategories={this.props.systemUserCategories}
      />
    )

    return component
  }
}

const mapStateToProps = (state, ownProps) => {
  const systemUserCategories = state.systemUserCategories.list || []
  const formData = ownProps.newRecord
    ? state.form.newSystemUser && state.form.newSystemUser.values
    : state.form.editSystemUser && state.form.editSystemUser.values
  return {
    systemUserCategories,
    formData
  }
}

export default connect(
  mapStateToProps,
  { createSystemUser, updateSystemUser, destroy, getSystemUserCategories }
)(RenderForm)
