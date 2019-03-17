import React from "react"
import Row from "./row"

export default props => {
  const { tasks } = props
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title text-dark">
          <i className="fas fa-history pl-2 pr-3" />
          過去の履歴
        </h4>
        <hr />
        <table className="table table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>依頼内容</th>
              <th>状態</th>
              <th>システム</th>
              <th>アカウント</th>
              <th>依頼者</th>
              <th>依頼日</th>
              <th>担当者</th>
              <th>完了日 / 却下日</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => {
              return (
                <Row
                  key={task.id}
                  id={task.id}
                  action={task.action}
                  status={task.status}
                  authorName={task.author.name}
                  createdAt={task.created_at}
                  assigneeName={task.assignee.name}
                  closedAt={task.closed_at}
                  rejectReason={task.reject_reason}
                  targetSystemName={task.system_name}
                  targetSystemUserName={task.system_user_name}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
