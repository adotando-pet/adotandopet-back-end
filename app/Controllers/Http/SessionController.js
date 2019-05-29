'use strict'

const User = use('App/Models/User')

const LoginLog = use('App/Services/LoginLog')

class SessionController {
  async store ({ request, response, auth }) {
    try {
      const { email, password } = request.all()

      const user = await User.findByOrFail('email', email)

      const token = await auth.attempt(email, password)

      await LoginLog.log(request, user)

      user.password = undefined

      return { data: user, token }
    } catch (err) {
      return response
        .send(err.status)
        .send({ error: { message: 'E-mail/Senha inválidos' } })
    }
  }
}

module.exports = SessionController
