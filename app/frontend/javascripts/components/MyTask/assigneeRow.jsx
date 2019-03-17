import React from "react"
import TaskStateBadge from "../CommonItems/taskStatusBadge"

export default props => {
  const {
    id,
    authorName,
    action,
    rejectReason,
    systemName,
    systemUserName,
    createdAt,
    closedAt,
    status,
    handleCompleteClick,
    handleRejectClick
  } = props

  const completeButton = (
    <span className="font-weight-bold text-primary" onClick={handleCompleteClick}>
      <i className="fas fa-check pr-1" />
      承認する
    </span>
  )

  const rejectButton = (
    <span className="font-weight-bold text-denger" onClick={handleRejectClick}>
      <i className="fas fa-minus pr-1" />
      却下する
    </span>
  )

  return (
    <React.Fragment>
      <tr>
        <td>#{id}</td>
        <td>{action}</td>
        <td>
          <TaskStateBadge status={status} rejectReason={rejectReason} />
        </td>
        <td>{systemName}</td>
        <td>{systemUserName}</td>
        <td>{createdAt}</td>
        <td>{authorName}</td>
        <td>{!closedAt && completeButton}</td>
        <td>{!closedAt && rejectButton}</td>
      </tr>
    </React.Fragment>
  )
}
