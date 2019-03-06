'use strict'

const User = use('App/Models/User')

class UserController {
  async index () {
    const user = await User.query()
      .with('adoptions')
      .with('advertisements')
      .with('comments')
      .with('phones')
      .with('address')
      .with('roles')
      .with('permissions')
      .fetch()

    return user
  }

  async show ({ params }) {
    const user = await User.findOrFail(params.id)

    await user.loadMany([
      'adoptions',
      'advertisements',
      'comments',
      'phones',
      'address',
      'roles',
      'permissions'
    ])

    return user
  }

  async store ({ request }) {
    const { permissions, roles, ...data } = request.only([
      'name',
      'email',
      'password',
      'gender',
      'age',
      'avatar_url',
      'permissions',
      'roles'
    ])

    const user = await User.create(data)

    if (roles) {
      await user.roles().attach(roles)
    }

    if (permissions) {
      await user.permissions().attach(permissions)
    }

    await user.loadMany([
      'adoptions',
      'advertisements',
      'comments',
      'phones',
      'address',
      'roles',
      'permissions'
    ])

    return user
  }

  async update ({ request, params }) {
    const { permissions, roles, ...data } = request.only([
      'name',
      'email',
      'password',
      'gender',
      'age',
      'avatar_url',
      'permissions',
      'roles'
    ])

    const user = await User.findOrFail(params.id)

    await user.merge(data)

    await user.save()

    if (roles) {
      await user.roles().sync(roles)
    }

    if (permissions) {
      await user.permissions().sync(permissions)
    }

    await user.loadMany([
      'adoptions',
      'advertisements',
      'comments',
      'phones',
      'address',
      'roles',
      'permissions'
    ])

    return user
  }

  async destroy ({ params }) {
    const user = await User.findOrFail(params.id)

    await user.delete()
  }
}

module.exports = UserController
