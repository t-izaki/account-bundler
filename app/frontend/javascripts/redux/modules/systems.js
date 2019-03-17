import {
  getRequest,
  postRequest,
  patchRequest,
  deleteRequest
} from "../../session"

// Actions
const FETCH_SYSTEMS_SUCCESS = "FETCH_SYSTEMS_SUCCESS"
const FETCH_TARGET_SYSTEM_SUCCESS = "FETCH_TARGET_SYSTEM_SUCCESS"
const CREATE_SYSTEM_SUCCESS = "CREATE_SYSTEM_SUCCESS"
const UPDATE_SYSTEM_SUCCESS = "UPDATE_SYSTEM_SUCCESS"
const DELETE_SYSTEM_SUCCESS = "DELETE_SYSTEM_SUCCESS"

// Reducer
const initialState = {
  list: [],
  target: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SYSTEMS_SUCCESS:
      return {
        ...state,
        list: action.payload.systems
      }

    case FETCH_TARGET_SYSTEM_SUCCESS:
      return {
        ...state,
        target: action.payload.system
      }

    case CREATE_SYSTEM_SUCCESS:
      return {
        ...state,
        list: [action.payload.system, ...state.list]
      }

    case UPDATE_SYSTEM_SUCCESS:
      const updatedSystem = action.payload.system
      return {
        ...state,
        list: [updatedSystem, ...state.list.filter(s => s.id !== updatedSystem.id)],
        target: updatedSystem
      }

    case DELETE_SYSTEM_SUCCESS:
      return {
        ...state,
        list: state.list.filter(s => s.id !== action.payload.systemId)
      }

    default:
      return state
  }
}

// Selector
export const archiveSystemSelector = list => {
  return list.filter(s => s.archived_at)
}

export const notArchivedSystemSelector = list => {
  return list.filter(s => !s.archived_at)
}

export const accountExistSystemSelector = (list, accounts) => {
  const accountExistSystemIds = accounts.map(a => a.system.id)
  return list.filter(system => accountExistSystemIds.includes(system.id))
}

export const accountNotExistSystemSelector = (list, accounts) => {
  const accountExistSystemIds = accounts.map(a => a.system.id)
  return list.filter(system => !accountExistSystemIds.includes(system.id))
}

// Action Creators
const fetchSystemsSuccess = systems => {
  return {
    type: FETCH_SYSTEMS_SUCCESS,
    payload: {
      systems
    }
  }
}

const fetchTargetSystemSuccess = system => {
  return {
    type: FETCH_TARGET_SYSTEM_SUCCESS,
    payload: {
      system
    }
  }
}

const createSystemSuccess = system => {
  return {
    type: CREATE_SYSTEM_SUCCESS,
    payload: {
      system
    }
  }
}

const updateSystemSuccess = system => {
  return {
    type: UPDATE_SYSTEM_SUCCESS,
    payload: {
      system
    }
  }
}

const deleteSystemSuccess = systemId => {
  return {
    type: DELETE_SYSTEM_SUCCESS,
    payload: {
      systemId
    }
  }
}

// Async Actions
export const fetchSystems = () => {
  return async dispatch => {
    //TODO: 例外処理
    const response = await getRequest("/api/systems")
    dispatch(fetchSystemsSuccess(response.body))
  }
}

export const fetchTargetSystem = systemId => {
  return async dispatch => {
    //TODO: 例外処理
    const response = await getRequest(`/api/systems/${systemId}`)
    dispatch(fetchTargetSystemSuccess(response.body))
  }
}

export const createSystem = params => {
  return async dispatch => {
    //TODO: 例外処理
    const response = await postRequest("/api/systems", params)
    dispatch(createSystemSuccess(response.body))
  }
}

export const updateSystem = params => {
  return async dispatch => {
    //TODO: 例外処理
    const response = await patchRequest(`/api/systems/${params.id}`, params)
    dispatch(updateSystemSuccess(response.body))
  }
}

export const archiveSystem = systemId => {
  return async dispatch => {
    //TODO: 例外処理
    const response = await postRequest(`/api/systems/${systemId}/archive`)
    dispatch(updateSystemSuccess(response.body))
  }
}

export const rearchiveSystem = systemId => {
  return async dispatch => {
    //TODO: 例外処理
    const response = await deleteRequest(`/api/systems/${systemId}/archive`)
    dispatch(updateSystemSuccess(response.body))
  }
}

export const deleteSystem = systemId => {
  return async dispatch => {
    //TODO: 例外処理
    const response = await deleteRequest(`/api/systems/${systemId}`)
    dispatch(deleteSystemSuccess(systemId))
  }
}
