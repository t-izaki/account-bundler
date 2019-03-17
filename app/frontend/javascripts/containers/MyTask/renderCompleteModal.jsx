import React from "react"
import { connect } from "react-redux"
import { completeTask } from "../../redux/modules/task"
import CompleteModal from "../../components/MyTask/completeModal"

class RenderCompleteModal extends React.Component {
  constructor(props) {
    super(props)
  }

  handleCompleteSubmit = () => {
    event.preventDefault()
    this.props.completeTask(this.props.targetTask.id)
    this.props.handleCloseModal()
  }

  render() {
    return (
      <CompleteModal
        targetTask={this.props.targetTask}
        handleCopyEmailClick={this.handleCopyEmailClick}
        handleCompleteSubmit={this.handleCompleteSubmit}
        handleCloseModal={this.props.handleCloseModal}
      />
    )
  }
}

export default connect(
  null,
  { completeTask }
)(RenderCompleteModal)
