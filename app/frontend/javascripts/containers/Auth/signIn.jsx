import React from "react"
import { connect } from "react-redux"
import { createSession } from "../../session"
import Form from "../../components/Auth/signIn"

class Signin extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSignInSubmit = () => {
    event.preventDefault()
    createSession(this.props.formData)
  }

  render() {
    return <Form handleSignInSubmit={this.handleSignInSubmit} />
  }
}

const mapStateToProps = state => {
  return {
    formData: state.form.signIn && state.form.signIn.values
  }
}

export default connect(
  mapStateToProps,
  { createSession }
)(Signin)
