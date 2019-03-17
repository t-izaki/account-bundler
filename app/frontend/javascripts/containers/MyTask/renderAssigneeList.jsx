import React from "react"
import List from "../../components/MyTask/assigneeList"
import { TASK_STATUS_IN_PROGRESS } from "../../const"
import RenderCompleteModal from "./renderCompleteModal"
import RenderRejectModal from "./renderRejectModal"
import { notInProgressTaskSelector, inProgressTaskSelector } from "../../redux/modules/task"

class RenderList extends React.Component {
  constructor(props) {
    super(props)
    const urlParams = this.props.params

    this.state = {
      displayCompleted: Boolean(urlParams.completed),
      showCompleteModalTask: null,
      showRejectModalTask: null
    }
  }

  handleDisplayCompletedClick = () => {
    this.setState(prevState => ({
      displayCompleted: !prevState.displayCompleted
    }))
  }

  handleCompleteClick = task => {
    return () => {
      this.setState({
        showCompleteModalTask: task
      })
    }
  }

  handleRejectClick = task => {
    return () => {
      this.setState({
        showRejectModalTask: task
      })
    }
  }

  handleCloseModal = () => {
    this.setState({
      showCompleteModalTask: null,
      showRejectModalTask: null
    })
  }

  render() {
    const displayTasks = this.state.displayCompleted
      ? notInProgressTaskSelector(this.props.myTasks)
      : inProgressTaskSelector(this.props.myTasks)

    return (
      <React.Fragment>
        <List
          tasks={displayTasks}
          displayCompleted={this.state.displayCompleted}
          handleDisplayCompletedClick={this.handleDisplayCompletedClick}
          handleCompleteClick={this.handleCompleteClick}
          handleRejectClick={this.handleRejectClick}
          handleCloseModal={this.handleCloseModal}
        />
        <RenderCompleteModal targetTask={this.state.showCompleteModalTask} handleCloseModal={this.handleCloseModal} />
        <RenderRejectModal targetTask={this.state.showRejectModalTask} handleCloseModal={this.handleCloseModal} />
      </React.Fragment>
    )
  }
}

export default RenderList
