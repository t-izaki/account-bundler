import React from "react"
import TaskStateBadge from "../CommonItems/taskStatusBadge"

export default props => {
  const {
    id,
    assigneeName,
    action,
    systemName,
    systemUserName,
    createdAt,
    status,
    closedAt,
    rejectReason,
    handleClick
  } = props

  const cancelButton = (
    <span
      className="font-weight-bold text-danger"
      onClick={() => {
        if (confirm("タスクを取り消します。よろしいですか？")) {
          handleClick()
        }
      }}
    >
      <i className="fas fa-ban pr-1" />
      依頼を取り消す
    </span>
  )

  return (
    <tr>
      <td>#{id}</td>
      <td>{action}</td>
      <td>
        <TaskStateBadge status={status} rejectReason={rejectReason} />
      </td>
      <td>{systemName}</td>
      <td>{systemUserName}</td>
      <td>{createdAt}</td>
      <td>{assigneeName}</td>
      <td>{!closedAt && cancelButton}</td>
    </tr>
  )
}
