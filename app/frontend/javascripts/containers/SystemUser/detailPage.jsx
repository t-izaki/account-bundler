import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { fetchSystems } from "../../redux/modules/systems"
import {
  fetchTargetSystemUser,
  deleteSystemUser,
  archiveSystemUser,
  rearchiveSystemUser
} from "../../redux/modules/systemUser"
import { fetchAccounts } from "../../redux/modules/account"
import RenderForm from "./renderForm"
import Detail from "../../components/SystemUser/detail"
import CreateAccount from "./createAccount"
import DeleteAccount from "./deleteAccount"
import Alert from "../../components/CommonItems/alert"

class DetailPage extends React.Component {
  constructor(props) {
    super(props)

    const { params } = this.props.match
    const systemUserId = Number(params.id)

    this.state = {
      systemUserId
    }
  }

  componentDidMount() {
    this.props.fetchSystems()
    this.props.fetchTargetSystemUser(this.state.systemUserId)
    this.props.fetchAccounts(this.state.systemUserId)
  }

  handleArchiveClick = () => {
    this.props.archiveSystemUser(this.props.systemUser.id)
  }

  handleRearchiveClick = () => {
    this.props.rearchiveSystemUser(this.props.systemUser.id)
  }

  handleDeleteClick = () => {
    this.props.deleteSystemUser(this.props.systemUser.id)
  }

  render() {
    const { url } = this.props.match
    const alert = (
      <div className="row">
        <div className="col-12">
          <Alert message="この利用者はアーカイブされています" alertType="info" />
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
              <Link to="/systemUsers">利用者・申請</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {this.props.systemUser.name}
            </li>
          </ol>
        </nav>
        {this.props.systemUser.archived_at && alert}
        <div className="row">
          <div className="col-lg-3 pr-0">
            {url.endsWith("/edit") ? (
              <RenderForm newRecord={false} initialValues={this.props.systemUser} />
            ) : (
              <Detail
                systemUser={this.props.systemUser}
                handleArchiveClick={this.handleArchiveClick}
                handleRearchiveClick={this.handleRearchiveClick}
                handleDeleteClick={this.handleDeleteClick}
              />
            )}
          </div>
          <div className="col-lg-9 pl-0">
            <DeleteAccount systemUser={this.props.systemUser} />
            <CreateAccount systemUser={this.props.systemUser} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    systemUser: state.systemUsers.target
  }
}

export default connect(
  mapStateToProps,
  { fetchSystems, fetchTargetSystemUser, fetchAccounts, deleteSystemUser, archiveSystemUser, rearchiveSystemUser }
)(DetailPage)
