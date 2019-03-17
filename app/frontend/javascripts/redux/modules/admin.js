import { getRequest } from "../../session"

// Actions
export const FETCH_ADMINS_SUCCESS = "FETCH_ADMINS_SUCCESS"

// Reducer
const initialState = {
  list: []
}

export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ADMINS_SUCCESS:
      return {
        list: action.payload.admins
      }

    default:
      return state
  }
}

// Action Creators
const fetchAdminsSuccess = admins => {
  return {
    type: FETCH_ADMINS_SUCCESS,
    payload: {
      admins
    }
  }
}

// Async Actions
export const fetchAdmins = () => {
  return async dispatch => {
    //TODO: 例外処理
    const response = await getRequest("/api/admins")
    dispatch(fetchAdminsSuccess(response.body))
  }
}
