export const server = {
  port: 2223
}

export const jwt = {
  secret: 'your_secret',
  expiresIn: '1h',
  ignores: [/\/login\/$/, /\/login$/]
}