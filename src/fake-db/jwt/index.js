import mock from "../mock"
// import jwt from "jsonwebtoken"

const data = {
  users: [
    {
      id: 1,
      username: "admin",
      password: "admin",
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
      username: "client",
      password: "client",
      role: "client",
      ability: [
        {
          action: "read",
          subject: "ACL"
        },
        {
          action: "read",
          subject: "Auth"
        }
      ]
    }
  ]
}

const jwtConfig = {
  secret: "dd5f3089-40c3-403d-af14-d0c228b05cb4",
  refreshTokenSecret: "7c4c1c50-3230-45bf-9eae-c9b2e401c767",
  expireTime: "10m",
  refreshTokenExpireTime: "10m"
}
mock.onPost("/jwt/login").reply((request) => {
  return [201]
})

// mock.onPost("/jwt/login").reply((request) => {
//   const { login, password } = JSON.parse(request.data)

//   let error = {
//     login: ["Something went wrong"]
//   }

//   const user = data.users.find(
//     (u) => u.username === login && u.password === password
//   )

//   if (user) {
//     try {
//       const accessToken = jwt.sign({ id: user.id }, jwtConfig.secret, {
//         expiresIn: jwtConfig.expireTime
//       })
//       const refreshToken = jwt.sign(
//         { id: user.id },
//         jwtConfig.refreshTokenSecret,
//         {
//           expiresIn: jwtConfig.refreshTokenExpireTime
//         }
//       )

//       const userData = { ...user }

//       delete userData.password

//       const response = {
//         userData,
//         accessToken,
//         refreshToken
//       }

//       return [200, response]
//     } catch (e) {
//       error = e
//     }
//   } else {
//     error = {
//       login: ["Login or Password is Invalid"]
//     }
//   }

//   return [400, { error }]
// })

// mock.onPost("/jwt/refresh-token").reply((request) => {
//   const { refreshToken } = JSON.parse(request.data)

//   try {
//     const { id } = jwt.verify(refreshToken, jwtConfig.refreshTokenSecret)

//     const userData = { ...data.users.find((user) => user.id === id) }

//     const newAccessToken = jwt.sign({ id: userData.id }, jwtConfig.secret, {
//       expiresIn: jwtConfig.expiresIn
//     })
//     const newRefreshToken = jwt.sign(
//       { id: userData.id },
//       jwtConfig.refreshTokenSecret,
//       {
//         expiresIn: jwtConfig.refreshTokenExpireTime
//       }
//     )

//     delete userData.password
//     const response = {
//       userData,
//       accessToken: newAccessToken,
//       refreshToken: newRefreshToken
//     }

//     return [200, response]
//   } catch (e) {
//     const error = "Invalid refresh token"
//     return [401, { error }]
//   }
// })
