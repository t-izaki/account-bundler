import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { createLogger } from "redux-logger"
import { reducer as formReducer } from "redux-form"

// includeModules
import systemsReducer from "./modules/systems"
import adminReducer from "./modules/admin"
import systemUserReducer from "./modules/systemUser"
import accountReducer from "./modules/account"
import taskReducer from "./modules/task"
import systemUserCategoryReducer from "./modules/systemUserCategory"

const rootReducer = combineReducers({
  systems: systemsReducer,
  systemUsers: systemUserReducer,
  systemUserCategories: systemUserCategoryReducer,
  admins: adminReducer,
  accounts: accountReducer,
  tasks: taskReducer,
  form: formReducer
})

const logger = createLogger({
  diff: true,
  collapsed: true
})

// Redux DevTools Extension
// https://github.com/zalmoxisus/redux-devtools-extension
//
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)))
const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store
