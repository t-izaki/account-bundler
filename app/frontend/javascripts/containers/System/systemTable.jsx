import React from "react"
import { connect } from "react-redux"
import List from "../../components/System/list"
import { fetchSystems, archiveSystemSelector, notArchivedSystemSelector } from "../../redux/modules/systems"

class SystemTable extends React.Component {
  constructor(props) {
    super(props)
    const urlParams = this.props.params

    this.state = {
      displayArchived: Boolean(urlParams.archived)
    }
  }

  componentDidMount() {
    this.props.fetchSystems()
  }

  handleDisplayArchivedClick = () => {
    this.setState(prevState => ({
      displayArchived: !prevState.displayArchived
    }))
  }

  render() {
    const displaySystems = this.state.displayArchived
      ? archiveSystemSelector(this.props.systems)
      : notArchivedSystemSelector(this.props.systems)

    return (
      <List
        systems={displaySystems}
        displayArchived={this.state.displayArchived}
        handleDisplayArchivedClick={this.handleDisplayArchivedClick}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    systems: state.systems.list
  }
}

export default connect(
  mapStateToProps,
  { fetchSystems }
)(SystemTable)
