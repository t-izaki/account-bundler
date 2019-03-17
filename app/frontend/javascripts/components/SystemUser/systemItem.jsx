import React from "react"

export default ({ name, active, isRequesting, handleClick }) => {
  return (
    <div className="col-lg-3 mb-2">
      <div
        className={"d-block p-2 rounded " + (active ? "bg-secondary text-white" : "border border-secondary")}
        onClick={isRequesting ? undefined : handleClick}
      >
        <div className="row">
          <div className="col-lg-8">
            <b>{name}</b>
          </div>
          <div className="col-lg-2">
            <span className="text-right">{isRequesting && [<i className="fas fa-spinner pr-2" />, "申請中"]}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
