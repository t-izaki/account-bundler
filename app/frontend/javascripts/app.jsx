import React from "react"
import { Route, Router, Redirect, Switch } from "react-router-dom"
import { createBrowserHistory } from "history"
import Header from "./components/templates/header"
import Sidebar from "./components/templates/sidebar"

import Dashboard from "./containers/Dashboard/index"
import SystemTopPage from "./containers/System/index"
import SystemDetailPage from "./containers/System/show"
import SystemUserTopPage from "./containers/SystemUser/topPage"
import SystemUserDetailPage from "./containers/SystemUser/detailPage"
import HistoryTopPage from "./containers/History/topPage"
import MyTasksTopPage from "./containers/MyTask/topPage"
import SignInPage from "./containers/Auth/signIn"

const history = createBrowserHistory({})

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/signIn" component={SignInPage} />
        <Auth>
          <Header title="Account Bundler" />
          <div className="container-flued">
            <div className="row">
              <Sidebar />
              <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <Switch>
                  <Route path="/systems/:id/edit" component={SystemDetailPage} />
                  <Route path="/systems/:id" component={SystemDetailPage} />
                  <Route path="/systems" component={SystemTopPage} />
                  <Route path="/systemUsers/:id/edit" component={SystemUserDetailPage} />
                  <Route path="/systemUsers/:id" component={SystemUserDetailPage} />
                  <Route path="/systemUsers" component={SystemUserTopPage} />
                  <Route path="/myTasks" component={MyTasksTopPage} />
                  <Route path="/history" component={HistoryTopPage} />
                  <Route path="/" component={Dashboard} />
                  <Redirect to="/" />
                </Switch>
              </main>
            </div>
          </div>
        </Auth>
      </Switch>
    </Router>
  )
}

export default App

const Auth = props => {
  return localStorage.getItem("access-token") ? props.children : <Redirect to={"/signIn"} />
}
