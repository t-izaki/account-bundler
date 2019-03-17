import React from "react"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link {/*active*}">
              <span className="pr-3">
                <i className="fas fa-columns fa-lg align-middle" />
              </span>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/myTasks" className="nav-link">
              <span className="pr-3">
                <i className="far fa-check-square fa-lg align-middle" />
              </span>
              マイタスク
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/systemUsers" className="nav-link">
              <span className="pr-3">
                <i className="fas fa-user fa-lg align-middle" />
              </span>
              利用者・申請
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/systems" className="nav-link">
              <span className="pr-3">
                <i className="fas fa-dice-d6 fa-lg align-middle" />
              </span>
              システムマスタ
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/history" className="nav-link">
              <span className="pr-3">
                <i className="fas fa-history fa-lg align-middle" />
              </span>
              履歴
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar
