import React from "react"
import { Link } from "react-router-dom"

export default props => {
  const { id, name, email, joined_at, retired_at, system_user_category, archived_at } = props.systemUser
  const { handleArchiveClick, handleRearchiveClick, handleDeleteClick } = props

  const archiveButton = archived_at ? (
    <span
      className="font-weight-bold text-info"
      onClick={() => {
        if (confirm("利用者をアーカイブから元に戻します。よろしいですか？")) {
          handleRearchiveClick()
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
        if (confirm("利用者をアーカイブします。よろしいですか？")) {
          handleArchiveClick()
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
        if (confirm("利用者を削除します。よろしいですか？")) {
          handleDeleteClick()
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
            <i className="fas fa-user pl-1 pr-3" />
            {name}
          </h4>
          <hr />
          <div className="row">
            <div className="col-12 mb-3">
              <h6>登録用メールアドレス</h6>
              <p className="font-weight-bold">{email}</p>
            </div>
            <div className="col-12 mb-3">
              <h6>カテゴリ</h6>
              <p className="font-weight-bold">{system_user_category ? system_user_category.name : "-"}</p>
            </div>
            <div className="col-12 mb-3">
              <h6>入社日</h6>
              <p className="font-weight-bold">{joined_at || "-"}</p>
            </div>
            <div className="col-12 mb-1">
              <h6>退職日</h6>
              <p className="font-weight-bold">{retired_at || "-"}</p>
            </div>
            <div className="col-12 text-right">
              <Link to={`/systemUsers/${id}/edit`} className="font-weight-bold">
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
                <small>この利用者に関する全てのデータ(今までの履歴を含む)が削除されます</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
