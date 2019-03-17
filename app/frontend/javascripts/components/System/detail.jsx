import React from "react"
import { Link } from "react-router-dom"

export default props => {
  const { id, name, url, admin_name, use_start_at, use_end_at, remark, archived_at } = props.system
  const { handleArchiveButton, handleRearchiveButton, handleDeleteButton } = props

  const archiveButton = archived_at ? (
    <span
      className="font-weight-bold text-info"
      onClick={() => {
        if (confirm("システムをアーカイブから元に戻します。よろしいですか？")) {
          handleRearchiveButton()
        }
      }}
    >
      <i className="fas fa-archive pr-1" />
      アーカイブから戻す
    </span>
  ) : (
    <span
      className="font-weight-bold text-info"
      onClick={() => {
        if (confirm("システムをアーカイブします。よろしいですか？")) {
          handleArchiveButton()
        }
      }}
    >
      <i className="fas fa-archive pr-1" />
      アーカイブする
    </span>
  )

  const deleteButton = (
    <span
      className="font-weight-bold text-danger"
      onClick={() => {
        if (confirm("システムを削除します。よろしいですか？")) {
          handleDeleteButton()
        }
      }}
    >
      <i className="fas fa-trash pr-1" />
      削除する
    </span>
  )

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title text-dark">
            <i className="fas fa-dice-d6 pl-1 pr-3" />
            {name}
          </h4>
          <hr />
          <div className="row">
            <div className="col-12 mb-3">
              <h6>URL</h6>
              <p className="font-weight-bold">
                {url}
                <a href={url} target="_blank">
                  <i className="fas fa-external-link-alt pl-2" />
                </a>
              </p>
            </div>
            <div className="col-12 mb-3">
              <h6>システム管理者</h6>
              <p className="font-weight-bold">{admin_name || "-"}</p>
            </div>
            <div className="col-12 mb-3">
              <h6>利用開始日</h6>
              <p className="font-weight-bold">{use_start_at || "-"}</p>
            </div>
            <div className="col-12 mb-3">
              <h6>利用終了日</h6>
              <p className="font-weight-bold">{use_end_at || "-"}</p>
            </div>
            <div className="col-12 mb-1">
              <h6>備考</h6>
              <p className="font-weight-bold">{remark || "-"}</p>
            </div>
            <div className="col-12 text-right">
              <Link to={`/systems/${id}/edit`} className="font-weight-bold">
                <i className="fas fa-pen pr-1" />
                編集する
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <p>
                {archiveButton}
                <br />
                <small>アーカイブされた状態では、アカウントを申請することができません</small>
              </p>
              <p>
                {deleteButton}
                <br />
                <small>このシステムに関する全てのデータ(今までの履歴を含む)が削除されます</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
