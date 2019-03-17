import React from "react"
import Row from "./row"

export default props => {
  const { systemUsers, displayArchived, handleDisplayArchivedClick } = props
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title text-dark">
          <i className="fas fa-user pl-2 pr-3" />
          アカウント申請・詳細
        </h4>
        <hr />
        <div className="row mb-3">
          <div className="col">
            <div className="float-right">
              {displayArchived && "アーカイブが表示されています"}
              <p className="badge badge-pill badge-dark px-3 py-2 ml-2" onClick={handleDisplayArchivedClick}>
                {displayArchived ? "もとに戻す" : "アーカイブを表示"}
              </p>
            </div>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>名前</th>
              <th>カテゴリ</th>
              <th>入社日</th>
              <th>退職日</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {systemUsers.map(systemUser => {
              return (
                <Row
                  key={systemUser.id}
                  id={systemUser.id}
                  name={systemUser.name}
                  category={systemUser.system_user_category && systemUser.system_user_category.name}
                  joined_at={systemUser.joined_at}
                  retired_at={systemUser.retired_at}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
