
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  loginEndpoint: `/jwt/login`,
  refreshEndpoint: '/jwt/refresh-token',

  tokenType: 'Bearer',

  storageTokenKeyName: 'access',
  storageRefreshTokenKeyName: 'refresh'
}
