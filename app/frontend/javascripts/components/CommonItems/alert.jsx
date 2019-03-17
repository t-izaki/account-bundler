import React from "react"

export default props => {
  const { message, alertType } = props

  return (
    <div className="card">
      <div className="card-body">
        <div className={"mb-0 alert alert-" + alertType}>{message}</div>
      </div>
    </div>
  )
}
