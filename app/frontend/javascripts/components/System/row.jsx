import React from "react"
import { Link } from "react-router-dom"

export default props => {
  const { id, name, adminName, useStartAt, useEndAt, remark } = props

  return (
    <tr>
      <td>{name}</td>
      <td>{adminName}</td>
      <td>{useStartAt || "-"}</td>
      <td>{useEndAt || "-"}</td>
      <td>{remark || "-"}</td>
      <td>
        <Link to={`/systems/${id}`}>詳細</Link>
      </td>
    </tr>
  )
}
