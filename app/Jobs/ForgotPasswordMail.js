'use strict'

const Mail = use('Mail')

class ForgotPasswordMail {
  static get concurrency () {
    return 1
  }

  static get key () {
    return 'ForgotPasswordMail-job'
  }

  async handle ({ email, user, redirectUrl }) {
    console.log(ForgotPasswordMail.key)
    await Mail.send(
      ['emails.forgot_password'],
      {
        email,
        token: user.token,
        link: `${redirectUrl}?token=${user.token}`
      },
      message => {
        message
          .to(user.email)
          .from('claudio@adotandopet.com', 'Claudio | Adotando Pet')
          .subject('Recuperação de Senha')
      }
    )
  }
}

module.exports = ForgotPasswordMail
