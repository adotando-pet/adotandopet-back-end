'use strict'

const User = use('App/Models/User')

class UserController {
  async index () {
    const user = await User.query()
      .with('adoptions')
      .with('pets')
      .with('phones')
      .with('address')
      .with('roles')
      .with('permissions')
      .with('avatar')
      .fetch()

    return user
  }

  async show ({ params }) {
    const user = await User.findOrFail(params.id)

    await user.loadMany([
      'adoptions',
      'pets',
      'phones',
      'address',
      'avatar',
      'roles',
      'permissions'
    ])

    return user
  }

  async store ({ request }) {
    const { address, permissions, roles, ...data } = request.only([
      'name',
      'email',
      'password',
      'gender',
      'file_id',
      'permissions',
      'roles',
      'address'
    ])

    const user = await User.create(data)

    if (roles) {
      await user.roles().attach(roles)
    }

    if (permissions) {
      await user.permissions().attach(permissions)
    }

    if (address) {
      await user.address().create(address)
    }

    await user.loadMany([
      'adoptions',
      'pets',
      'phones',
      'address',
      'avatar',
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
      'file_id',
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
      'pets',
      'phones',
      'address',
      'avatar',
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
