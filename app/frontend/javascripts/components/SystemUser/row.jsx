import React from "react"
import { Link } from "react-router-dom"

export default props => {
  const { id, name, category, joined_at, retired_at } = props

  return (
    <tr>
      <td>{name}</td>
      <td>{category || "-"}</td>
      <td>{joined_at || "-"}</td>
      <td>{retired_at || "-"}</td>
      <td>{<Link to={`/systemUsers/${id}`}>詳細・申請</Link>}</td>
    </tr>
  )
}
