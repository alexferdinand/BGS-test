import { Server, Model } from 'miragejs'

const users = [
  {
    id: '1',
    login: 'fominsa',
    token: '24%(&!$#tocuh',
    name: 'Константин Константинович Константинопольский',
    email: 'konstya@yandex.ru',
    profileImg: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
  },
  {
    id: '2',
    login: 'Admin User',
    token: 'rcohus!$#21234ch',
  },
]

// eslint-disable-next-line no-new
new Server({
  fixtures: {
    users,
  },
  models: {
    user: Model,
  },

  routes() {
    this.namespace = 'api'
    this.urlPrefix = 'http://localhost:3000'

    // Nuxt Auth endpoints
    this.post('/login', function (schema, request) {
      const json = JSON.parse(request.requestBody)
      const response = schema.users.findBy({ login: json.login })
      if (json.password === 'dfdf') {
        // your actual backend should test the hashed password in the DB
        return { token: response.token }
      } else {
        return new Response(401)
      }
    })

    this.post('/user', function (schema, request) {
      const json = JSON.parse(request.requestBody)
      const token = Math.random().toString().slice(1)
      json.token = token
      schema.db.users.insert(json)
      return { token }
    })
    this.get('/user', function (schema, request) {
      const token = request.requestHeaders.Authorization
      const response = schema.users.findBy({ token })
      return this.serialize(response)
    })
    this.delete('/logout', function () {
      return {}
    })
  },
})
