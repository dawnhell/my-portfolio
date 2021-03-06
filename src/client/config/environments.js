import { merge } from 'lodash'

const development = {
  api: {
    baseURL: 'https://jsonplaceholder.typicode.com',
  },
}

const test = merge({}, development, {})

const production = {
  api: {
    baseURL: '',
  },
}

const stage = merge({}, production, {})

export default {
  development,
  test,
  production,
  stage,
}
