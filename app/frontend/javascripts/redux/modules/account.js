import { createTasksSuccess } from "./task"
import { getRequest, postRequest, deleteRequest } from "../../session"

// Actions
export const FETCH_ACCOUNTS_SUCCESS = "FETCH_ACCOUNTS_SUCCESS"

// Reducer
const initialState = {
  list: []
}

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ACCOUNTS_SUCCESS:
      return {
        ...state,
        list: action.payload.accounts
      }

    default:
      return state
  }
}

// Action Creators
const fetchAccountsSuccess = accounts => {
  return {
    type: FETCH_ACCOUNTS_SUCCESS,
    payload: {
      accounts
    }
  }
}

// Async Actions
export const fetchAccounts = systemUserId => {
  return async dispatch => {
    //TODO: 例外処理
    const response = await getRequest(`/api/system_users/${systemUserId}/multi_accounts`)
    dispatch(fetchAccountsSuccess(response.body))
  }
}

export const requestCreateAccounts = (systemUserId, params) => {
  return async dispatch => {
    const requestParams = Object.assign(params, { system_user_ids: [systemUserId] })
    //TODO: 例外処理
    const response = await postRequest(`/api/system_users/${systemUserId}/multi_accounts`, requestParams)
    dispatch(createTasksSuccess(response.body))
  }
}

export const requestDeleteAccounts = (systemUserId, params) => {
  return async dispatch => {
    const requestParams = Object.assign(params, { system_user_ids: [systemUserId] })
    //TODO: 例外処理
    const response = await deleteRequest(`/api/system_users/${systemUserId}/multi_accounts`, requestParams)
    dispatch(createTasksSuccess(response.body))
  }
}
