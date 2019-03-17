import React from "react"
import { connect } from "react-redux"
import queryString from "query-string"
import { fetchTasks, myAssigneeTaskSelector } from "../../redux/modules/task"
import RenderAssigneeList from "./renderAssigneeList"

class TopPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTasks()
  }

  render() {
    const params = queryString.parse(this.props.location.search)

    return (
      <React.Fragment>
        <RenderAssigneeList myTasks={this.props.myTasks} params={params} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    myTasks: myAssigneeTaskSelector(state.tasks.list)
  }
}

export default connect(
  mapStateToProps,
  { fetchTasks }
)(TopPage)
