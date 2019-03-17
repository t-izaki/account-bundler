import request from "superagent"

const authHeaderKeys = ["access-token", "token-type", "client", "expiry", "uid", "id"]

// Send API Request with AuthHeader

export const getRequest = async (endPoint, params = {}) => {
  const response = await request
    .get(endPoint)
    .send(params)
    .set(getAuthHeader())
  setAuthHeaderToLocalStorage(response.header)
  return response
}

export const postRequest = async (endPoint, params = {}) => {
  const response = await request
    .post(endPoint)
    .send(params)
    .set(getAuthHeader())
  setAuthHeaderToLocalStorage(response.header)
  return response
}

export const patchRequest = async (endPoint, params = {}) => {
  const response = await request
    .patch(endPoint)
    .send(params)
    .set(getAuthHeader())
  setAuthHeaderToLocalStorage(response.header)
  return response
}

export const deleteRequest = async (endPoint, params = {}) => {
  const response = await request
    .delete(endPoint)
    .send(params)
    .set(getAuthHeader())
  setAuthHeaderToLocalStorage(response.header)
  return response
}

// Create and Delete Session

export const createSession = async params => {
  //TODO: 例外処理
  const response = await request.post("/api/auth/sign_in").send(params)
  setAuthHeaderToLocalStorage(Object.assign(response.header, { id: response.body.data.id }))
  window.location.href = "/"
}

export const deleteSession = async () => {
  //TODO: 例外処理
  try {
    const response = await request.delete("/api/auth/sign_out").send(getAuthHeader())
  } catch (err) {}
  removeAuthHeaderFromLocalStorage()
  window.location.href = "/signIn"
}

// Getter and Setter AuthHeader(Session)

const getAuthHeader = () => {
  const header = {}
  for (let key of authHeaderKeys) {
    header[key] = localStorage.getItem(key)
  }
  return header
}

const setAuthHeaderToLocalStorage = header => {
  for (let key of authHeaderKeys) {
    header[key] && localStorage.setItem(key, header[key])
  }
}

const removeAuthHeaderFromLocalStorage = () => {
  for (let key of authHeaderKeys) {
    localStorage.removeItem(key)
  }
}
