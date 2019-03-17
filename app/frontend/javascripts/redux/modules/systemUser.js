import { getRequest, postRequest, patchRequest, deleteRequest } from "../../session"

// Actions
const FETCH_SYSTEM_USERS_SUCCESS = "FETCH_SYSTEM_USERS_SUCCESS"
const FETCH_TARGET_SYSTEM_USER_SUCCESS = "FETCH_TARGET_SYSTEM_USERS_SUCCESS"
const CREATE_SYSTEM_USER_SUCCESS = "CREATE_SYSTEM_USER_SUCCESS"
const UPDATE_SYSTEM_USER_SUCCESS = "UPDATE_SYSTEM_USER_SUCCESS"
const DELETE_SYSTEM_USER_SUCCESS = "DELETE_SYSTEM_USER_SUCCESS"

// Reducer
const initialState = {
  list: [],
  target: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SYSTEM_USERS_SUCCESS:
      return {
        ...state,
        list: action.payload.systemUsers
      }

    case FETCH_TARGET_SYSTEM_USER_SUCCESS:
      return {
        ...state,
        target: action.payload.systemUser
      }

    case CREATE_SYSTEM_USER_SUCCESS:
      return {
        ...state,
        list: [action.payload.systemUser, ...state.list]
      }

    case UPDATE_SYSTEM_USER_SUCCESS:
      const updatedSystemUser = action.payload.systemUser
      return {
        ...state,
        list: [updatedSystemUser, ...state.list.filter(su => su.id !== updatedSystemUser.id)],
        target: updatedSystemUser
      }

    case DELETE_SYSTEM_USER_SUCCESS:
      return {
        ...state,
        list: state.list.filter(su => su.id !== action.payload.systemUserId)
      }

    default:
      return state
  }
}

// Action Creators
const fetchSystemUsersSuccess = systemUsers => {
  return {
    type: FETCH_SYSTEM_USERS_SUCCESS,
    payload: {
      systemUsers
    }
  }
}

const fetchTargetSystemUserSuccess = systemUser => {
  return {
    type: FETCH_TARGET_SYSTEM_USER_SUCCESS,
    payload: {
      systemUser
    }
  }
}

const createSystemUserSuccess = systemUser => {
  return {
    type: CREATE_SYSTEM_USER_SUCCESS,
    payload: {
      systemUser
    }
  }
}

const updateSystemUserSuccess = systemUser => {
  return {
    type: UPDATE_SYSTEM_USER_SUCCESS,
    payload: {
      systemUser
    }
  }
}

const deleteSystemUserSuccess = systemUserId => {
  return {
    type: DELETE_SYSTEM_USER_SUCCESS,
    payload: {
      systemUserId
    }
  }
}

// Async Actions
export const fetchSystemUsers = () => {
  return async dispatch => {
    //TODO: 例外処理
    const response = await getRequest("/api/system_users")
    dispatch(fetchSystemUsersSuccess(response.body))
  }
}

export const fetchTargetSystemUser = systemUserId => {
  return async dispatch => {
    //TODO: 例外処理
    const response = await getRequest(`/api/system_users/${systemUserId}`)
    dispatch(fetchTargetSystemUserSuccess(response.body))
  }
}

export const createSystemUser = params => {
  return async dispatch => {
    //TODO: 例外処理
    const response = await postRequest("/api/system_users", params)
    dispatch(createSystemUserSuccess(response.body))
  }
}

export const updateSystemUser = params => {
  return async dispatch => {
    //TODO: 例外処理
    const response = await patchRequest(`/api/system_users/${params.id}`, params)
    dispatch(updateSystemUserSuccess(response.body))
  }
}

export const archiveSystemUser = systemUserId => {
  return async dispatch => {
    //TODO: 例外処理
    const response = await postRequest(`/api/system_users/${systemUserId}/archive`)
    dispatch(updateSystemUserSuccess(response.body))
  }
}

export const rearchiveSystemUser = systemUserId => {
  return async dispatch => {
    //TODO: 例外処理
    const response = await deleteRequest(`/api/system_users/${systemUserId}/archive`)
    dispatch(updateSystemUserSuccess(response.body))
  }
}

export const deleteSystemUser = systemUserId => {
  return async dispatch => {
    //TODO: 例外処理
    const response = await deleteRequest(`/api/system_users/${systemUserId}`)
    dispatch(deleteSystemUserSuccess(systemUserId))
  }
}
