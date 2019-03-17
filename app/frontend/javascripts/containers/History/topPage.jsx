import React from "react"
import { connect } from "react-redux"
import { fetchTasks } from "../../redux/modules/task"
import List from "../../components/History/list"

class TopPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTasks()
  }

  render() {
    return <List tasks={this.props.tasks} />
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks.list
  }
}

export default connect(
  mapStateToProps,
  { fetchTasks }
)(TopPage)
