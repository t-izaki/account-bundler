import {
  getRequest,
  postRequest,
  deleteRequest
} from "../../session"
import {
  MY_ADMIN_ID,
  TASK_STATUS_IN_PROGRESS
} from "../../const"

// Actions
const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS"
const CREATE_TASKS_SUCCESS = "CREATE_TASKS_SUCCESS"
const COMPLETE_TASK_SUCCESS = "COMPLETE_TASK_SUCCESS"
const REJECT_TASK_SUCCESS = "REJECT_TASK_SUCCESS"
const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS"

// Reducer
const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        list: action.payload.tasks
      }

    case CREATE_TASKS_SUCCESS:
      return {
        ...state,
        list: [...action.payload.tasks, ...state.list]
      }

    case COMPLETE_TASK_SUCCESS:
      const completedTask = action.payload.task
      return {
        ...state,
        list: [...state.list.filter(t => t.id !== completedTask.id), completedTask]
      }

    case REJECT_TASK_SUCCESS:
      const rejectedTask = action.payload.task
      return {
        ...state,
        list: [...state.list.filter(t => t.id !== rejectedTask.id), rejectedTask]
      }

    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        list: state.list.filter(t => t.id !== action.payload.taskId)
      }

    default:
      return state
  }
}

// selector
export const myAuthorTaskSelector = list => {
  return list.filter(t => t.author.id === MY_ADMIN_ID)
}

export const myAssigneeTaskSelector = list => {
  return list.filter(t => t.assignee.id === MY_ADMIN_ID)
}

export const inProgressTaskSelector = list => {
  return list.filter(t => t.status === TASK_STATUS_IN_PROGRESS)
}

export const notInProgressTaskSelector = list => {
  return list.filter(t => t.status !== TASK_STATUS_IN_PROGRESS)
}

// Action Creators
const fetchTasksSuccess = tasks => {
  return {
    type: FETCH_TASKS_SUCCESS,
    payload: {
      tasks
    }
  }
}

export const createTasksSuccess = tasks => {
  return {
    type: CREATE_TASKS_SUCCESS,
    payload: {
      tasks
    }
  }
}

const completeTaskSuccess = task => {
  return {
    type: COMPLETE_TASK_SUCCESS,
    payload: {
      task
    }
  }
}

const rejectTaskSuccess = task => {
  return {
    type: REJECT_TASK_SUCCESS,
    payload: {
      task
    }
  }
}

const deleteTaskSucccess = taskId => {
  return {
    type: DELETE_TASK_SUCCESS,
    payload: {
      taskId
    }
  }
}

// Async Actions
export const fetchTasks = () => {
  return async dispatch => {
    //TODO: 例外処理
    const response = await getRequest("/api/tasks")
    dispatch(fetchTasksSuccess(response.body))
  }
}

export const completeTask = taskId => {
  return async dispatch => {
    //TODO: 例外処理
    const response = await postRequest(`/api/tasks/${taskId}/completed`)
    dispatch(completeTaskSuccess(response.body))
  }
}

export const rejectTask = (taskId, params) => {
  return async dispatch => {
    //TODO: 例外処理
    const response = await postRequest(`/api/tasks/${taskId}/rejected`, params)
    dispatch(rejectTaskSuccess(response.body))
  }
}

export const deleteTask = taskId => {
  return async dispatch => {
    //TODO: 例外処理
    const response = await deleteRequest(`/api/tasks/${taskId}`)
    dispatch(deleteTaskSucccess(taskId))
  }
}
