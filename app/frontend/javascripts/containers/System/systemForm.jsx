import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { destroy } from "redux-form"
import { CreateForm, UpdateForm } from "../../components/System/form"
import { createSystem, updateSystem } from "../../redux/modules/systems"
import { fetchAdmins } from "../../redux/modules/admin"

class SystemForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fireRedirect: false
    }
  }

  componentDidMount() {
    this.props.fetchAdmins()
  }

  handleSubmit = () => {
    event.preventDefault()
    this.props.newRecord
      ? this.props.createSystem(this.props.formData) && this.props.destroy("newSystem")
      : this.props.updateSystem({ id: this.props.systemId, ...this.props.formData })
    this.setState({
      fireRedirect: true
    })
  }

  render() {
    if (!this.props.newRecord && this.state.fireRedirect) {
      return <Redirect to={`/systems/${this.props.system.id}`} />
    }

    const component = this.props.newRecord ? (
      <CreateForm admins={this.props.admins} handleSubmit={this.handleSubmit} newRecord={this.props.newRecord} />
    ) : (
      <UpdateForm admins={this.props.admins} handleSubmit={this.handleSubmit} newRecord={this.props.newRecord} />
    )

    return component
  }
}

const mapStateToProps = (state, ownProps) => {
  const admins = state.admins.list || []
  const system = state.systems.target || {}
  const formData = ownProps.newRecord
    ? state.form.newSystem && state.form.newSystem.values
    : state.form.editSystem && state.form.editSystem.values
  return {
    admins,
    system,
    formData
  }
}

export default connect(
  mapStateToProps,
  { createSystem, updateSystem, fetchAdmins, destroy }
)(SystemForm)
