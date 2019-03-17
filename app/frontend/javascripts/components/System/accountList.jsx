import React from "react"

export default props => {
  const { system } = props
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title text-dark">
          <i className="fas fa-users pl-1 pr-3" />
          現在のアカウント
        </h4>
        <hr />
        {(system.system_users || []).map(su => (
          <Item key={su.id} system_user={su} />
        ))}
      </div>
    </div>
  )
}

const Item = ({ system_user }) => {
  return <span className="pr-3">{system_user.name}</span>
}
