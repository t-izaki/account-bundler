import React from "react"
import Row from "./row"

export default ({ systems, displayArchived, handleDisplayArchivedClick }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title text-dark">
          <i className="fas fa-dice-d6 pl-2 pr-3" />
          システムマスタ
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
              <th>システム名</th>
              <th>管理者</th>
              <th>利用開始日</th>
              <th>利用終了日</th>
              <th>備考</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {systems.map(system => {
              return (
                <Row
                  key={system.id}
                  id={system.id}
                  name={system.name}
                  adminName={system.admin_name}
                  useStartAt={system.use_start_at}
                  useEndAt={system.use_end_at}
                  remark={system.remark}
                  archivedAt={system.archived_at}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
