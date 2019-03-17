import React from "react"
import TaskStateBadge from "../CommonItems/taskStatusBadge"

export default props => {
  const {
    id,
    action,
    status,
    authorName,
    createdAt,
    assigneeName,
    closedAt,
    rejectReason,
    targetSystemName,
    targetSystemUserName
  } = props

  return (
    <tr>
      <td>#{id}</td>
      <td>{action}</td>
      <td>
        <TaskStateBadge status={status} rejectReason={rejectReason} />
      </td>
      <td>{targetSystemName}</td>
      <td>{targetSystemUserName}</td>
      <td>{authorName}</td>
      <td>{createdAt}</td>
      <td>{assigneeName}</td>
      <td>{closedAt}</td>
    </tr>
  )
}
