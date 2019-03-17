import React from "react"
import { Link } from "react-router-dom"
import Row from "./myAuthorTaskRow"

export default ({
  myAssigneeTasksCount,
  myAuthorTasks,
  visibleLatestTaskSpan,
  handleCancelClick,
  handleLatestTaskSpanChange
}) => {
  return (
    <div className="row">
      <div className="col-lg-3 pr-0">
        <div className="card">
          <div className="card-body">
            <h6>マイタスク</h6>
            <hr />
            <div className="row">
              <div className="col-lg-12 text-center">
                <span className="display-4 pr-4">{myAssigneeTasksCount}</span>件
              </div>
            </div>
          </div>
          <div className="card-footer text-center text-muted">
            <Link to="/myTasks">確認する</Link>
          </div>
        </div>
      </div>
      <div className="col-lg-9 pl-0">
        <div className="card">
          <div className="card-body">
            <h6>最近依頼したタスク</h6>
            <hr />

            <div className="row">
              <div className="col-2 offset-10 mb-3">
                <select
                  className="custom-select custom-select-sm"
                  value={visibleLatestTaskSpan}
                  onChange={handleLatestTaskSpanChange}
                >
                  <option value="0">今日</option>
                  <option value="7">7日前</option>
                  <option value="30">30日前</option>
                  <option value="365">1年前</option>
                </select>
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
                  <th>担当者</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {myAuthorTasks.map(task => {
                  return (
                    <Row
                      key={task.id}
                      id={task.id}
                      assigneeName={task.assignee && task.assignee.name}
                      action={task.action}
                      systemName={task.system_name}
                      systemUserName={task.system_user_name}
                      createdAt={task.created_at}
                      closedAt={task.closed_at}
                      status={task.status}
                      rejectReason={task.reject_reason}
                      handleClick={handleCancelClick(task.id)}
                    />
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
