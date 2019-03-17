import React from "react"
import { connect } from "react-redux"
import { rejectTask } from "../../redux/modules/task"
import RejectModal from "../../components/MyTask/rejectModal"

class RenderRejectModal extends React.Component {
  constructor(props) {
    super(props)
  }

  handleRejectSubmit = () => {
    event.preventDefault()
    this.props.rejectTask(this.props.targetTask.id, this.props.formData)
    this.props.handleCloseModal()
  }

  render() {
    return (
      <RejectModal
        targetTask={this.props.targetTask}
        handleRejectSubmit={this.handleRejectSubmit}
        handleCloseModal={this.props.handleCloseModal}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    formData: state.form.taskRejectForm && state.form.taskRejectForm.values
  }
}

export default connect(
  mapStateToProps,
  { rejectTask }
)(RenderRejectModal)
