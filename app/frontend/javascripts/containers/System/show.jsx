import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { fetchTargetSystem, archiveSystem, rearchiveSystem, deleteSystem } from "../../redux/modules/systems"
import SystemForm from "./systemForm"
import Detail from "../../components/System/detail"
import AccountList from "../../components/System/accountList"
import Alert from "../../components/CommonItems/alert"

class SystemShow extends React.Component {
  constructor(props) {
    super(props)

    const { params } = this.props.match
    const systemId = Number(params.id)

    this.state = {
      systemId
    }
  }

  componentDidMount() {
    this.props.fetchTargetSystem(this.state.systemId)
  }

  handleArchiveButton = () => {
    this.props.archiveSystem(this.props.system.id)
  }

  handleRearchiveButton = () => {
    this.props.rearchiveSystem(this.props.system.id)
  }

  handleDeleteButton = () => {
    this.props.deleteSystem(this.props.system.id)
  }

  render() {
    const { url } = this.props.match
    const alert = (
      <div className="row">
        <div className="col-12">
          <Alert message="このシステムはアーカイブされています" alertType="info" />
        </div>
      </div>
    )

    return (
      <React.Fragment>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/dashboard">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/systems">システムマスタ</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {this.props.system.name}
            </li>
          </ol>
        </nav>
        {this.props.system.archived_at && alert}
        <div className="row">
          <div className="col-lg-3 pr-0">
            {url.endsWith("/edit") ? (
              <SystemForm newRecord={false} systemId={this.state.systemId} />
            ) : (
              <Detail
                system={this.props.system}
                handleArchiveButton={this.handleArchiveButton}
                handleRearchiveButton={this.handleRearchiveButton}
                handleDeleteButton={this.handleDeleteButton}
              />
            )}
          </div>
          <div className="col-lg-9 pl-0">
            <AccountList system={this.props.system} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    system: state.systems.target
  }
}

export default connect(
  mapStateToProps,
  { fetchTargetSystem, archiveSystem, rearchiveSystem, deleteSystem }
)(SystemShow)
