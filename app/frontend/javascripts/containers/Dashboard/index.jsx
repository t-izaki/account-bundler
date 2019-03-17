import React from "react"
import { connect } from "react-redux"
import Dashboard from "../../components/Dashboard/"
import {
  fetchTasks,
  deleteTask,
  myAuthorTaskSelector,
  myAssigneeTaskSelector,
  inProgressTaskSelector
} from "../../redux/modules/task"

class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visibleLatestTaskSpan: 365
    }
  }

  componentDidMount() {
    this.props.fetchTasks()
  }

  handleLatestTaskSpanChange = event => {
    this.setState({
      visibleLatestTaskSpan: event.target.value
    })
  }

  handleCancelClick = taskId => {
    return () => {
      this.props.deleteTask(taskId)
    }
  }

  recentlyTasks = (tasks, visibleLatestTaskSpan) => {
    const now = new Date()
    const visibleLatestTaskDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - visibleLatestTaskSpan)
    return tasks.filter(t => new Date(t.created_at) > visibleLatestTaskDate)
  }

  render() {
    const displayTasks = this.recentlyTasks(this.props.myAuthorTasks, this.state.visibleLatestTaskSpan)

    return (
      <Dashboard
        myAssigneeTasksCount={this.props.myAssigneeInProgressTasks.length}
        myAuthorTasks={displayTasks}
        visibleLatestTaskSpan={this.state.visibleLatestTaskSpan}
        handleCancelClick={this.handleCancelClick}
        handleLatestTaskSpanChange={this.handleLatestTaskSpanChange}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    myAuthorTasks: myAuthorTaskSelector(state.tasks.list),
    myAssigneeInProgressTasks: myAssigneeTaskSelector(inProgressTaskSelector(state.tasks.list))
  }
}

export default connect(
  mapStateToProps,
  { fetchTasks, deleteTask }
)(Index)
