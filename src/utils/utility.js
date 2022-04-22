import config from "../services/auth/jwtDefaultConfig"
export const isUserLoggedIn = () =>
  !!(
    localStorage.getItem(config.storageTokenKeyName) &&
    localStorage.getItem("userData")
  )

export const getUserData = () => {
  const userData = localStorage.getItem("userData")
  if (!isUserLoggedIn()) return {}
  return userData ? JSON.parse(userData) : {}
}
export const getAccessToken = () => {
  const token = localStorage.getItem(config.storageTokenKeyName)
  if (!isUserLoggedIn()) return null
  return token
}

export const formatDate = (number) => {
  if (!number) return null
  return new Date(number).toLocaleDateString()
}
