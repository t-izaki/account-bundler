import React from "react"
import Row from "./assigneeRow"

export default props => {
  const {
    tasks,
    displayCompleted,
    handleDisplayCompletedClick,
    handleCompleteClick,
    handleRejectClick,
    handleCloseModal
  } = props
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title text-dark">
          <i className="far fa-check-square pl-2 pr-3" />
          マイタスク
        </h4>
        <hr />
        <div className="row mb-3">
          <div className="col">
            <div className="float-right">
              {displayCompleted && "完了したものが表示されています"}
              <p className="badge badge-pill badge-dark px-3 py-2 ml-2" onClick={handleDisplayCompletedClick}>
                {displayCompleted ? "もとに戻す" : "完了したものを表示"}
              </p>
            </div>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>依頼内容</th>
              <th>状態</th>
              <th>システム</th>
              <th>アカウント</th>
              <th>依頼日</th>
              <th>依頼元</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => {
              return (
                <Row
                  key={task.id}
                  id={task.id}
                  authorName={task.author && task.author.name}
                  action={task.action}
                  rejectReason={task.reject_reason}
                  systemName={task.system_name}
                  systemUserName={task.system_user_name}
                  createdAt={task.created_at}
                  closedAt={task.closed_at}
                  status={task.status}
                  handleCompleteClick={handleCompleteClick(task)}
                  handleRejectClick={handleRejectClick(task)}
                  handleCloseModal={handleCloseModal}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
