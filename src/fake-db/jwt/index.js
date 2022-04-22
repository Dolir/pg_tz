import mock from "../mock"
import { v4 as uuidv4 } from "uuid"
const data = {
  users: [
    {
      id: 1,
      username: "Админ",
      password: "1234",
      role: "admin",
      ability: [
        {
          action: "manage",
          subject: "all"
        }
      ]
    },
    {
      id: 2,
      username: "Саша",
      password: "1234",
      role: "client"
    }
  ]
}

mock.onPost("/jwt/login").reply((request) => {
  const { login, password } = JSON.parse(request.data)

  let error = {
    login: ["Что то пошло не так"]
  }

  const user = data.users.find(
    (u) => u.username === login && u.password === password
  )

  if (user) {
    try {
      //Типа токен
      const accessToken = uuidv4()

      const userData = { ...user }

      delete userData.password

      const response = {
        userData,
        accessToken
      }

      return [200, response]
    } catch (e) {
      error = e
    }
  } else {
    error = {
      login: ["Пароль или логин неверны!"]
    }
  }

  return [400, { error }]
})
