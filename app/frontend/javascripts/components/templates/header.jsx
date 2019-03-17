import React from "react"
import { deleteSession } from "../../session"

const Header = () => {
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a className="navbar-brand bg-transparent shadow-none col-sm-3 col-md-2 mr-0" href="/">
        Account Bundler
      </a>
      <div>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <span className="nav-link" onClick={deleteSession}>
              ログアウト
              <i className="fas fa-sign-out-alt px-2" />
            </span>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
