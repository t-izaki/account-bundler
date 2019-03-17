import { getRequest } from "../../session"

// Actions
const SET_SYSTEM_USER_CATEGORIS = "SET_SYSTEM_USER_CATEGORIES"

// Reducer
const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SYSTEM_USER_CATEGORIS:
      return {
        ...state,
        list: action.payload.systemUserCategories
      }

    default:
      return state
  }
}

// Action Creators
const setSystemUserCategoriesToStore = systemUserCategories => {
  return {
    type: SET_SYSTEM_USER_CATEGORIS,
    payload: {
      systemUserCategories
    }
  }
}

// Async Actions
export const getSystemUserCategories = () => {
  return async dispatch => {
    //TODO: 例外処理
    const response = await getRequest("/api/system_user_categories")
    dispatch(setSystemUserCategoriesToStore(response.body))
  }
}
