import React from "react"
import { connect } from "react-redux"
import { fetchSystemUsers } from "../../redux/modules/systemUser"
import List from "../../components/SystemUser/list"

class RenderList extends React.Component {
  constructor(props) {
    super(props)
    const urlParams = this.props.params

    this.state = {
      displayArchived: Boolean(urlParams.archived)
    }
  }

  componentDidMount() {
    this.props.fetchSystemUsers()
  }

  handleDisplayArchivedClick = () => {
    this.setState(prevState => ({
      displayArchived: !prevState.displayArchived
    }))
  }

  render() {
    const displaySystemUsers = this.state.displayArchived
      ? this.props.systemUsers.filter(s => s.archived_at)
      : this.props.systemUsers.filter(s => !s.archived_at)

    return (
      <List
        systemUsers={displaySystemUsers}
        displayArchived={this.state.displayArchived}
        handleArchiveClick={this.handleArchiveClick}
        handleRearchiveClick={this.handleRearchiveClick}
        handleDeleteClick={this.handleDeleteClick}
        handleDisplayArchivedClick={this.handleDisplayArchivedClick}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    systemUsers: state.systemUsers.list || []
  }
}

export default connect(
  mapStateToProps,
  { fetchSystemUsers }
)(RenderList)
