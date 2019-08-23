const development = {
  port: 4000,
}

const production = {
  port: process.env.PORT || 8080,
}

export default {
  development,
  production,
}
