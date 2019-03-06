'use strict'

const Route = use('Route')

/**
 * Public Routes
 */
Route.get('/', () => {
  return { greeting: 'Welcome to Adotando Pet!' }
})

Route.post('users', 'UserController.store')
Route.get('categories', 'CategoryController.index')
Route.get('categories/:id', 'CategoryController.show')

Route.post('sessions', 'SessionController.store').validator('Session')

Route.resource('forgot-password', 'ForgotPasswordController')
  .apiOnly()
  .except(['index', 'show', 'destroy'])
  .validator(
    new Map([
      [['forgot-password.store'], ['ForgotPassword/Store']],
      [['forgot-password.update'], ['ForgotPassword/Update']]
    ])
  )

/**
 * Private Routes (Authenticated)
 */
Route.group(() => {
  Route.resource('users', 'UserController')
    .apiOnly()
    .except(['store'])
  Route.resource('categories', 'CategoryController')
    .apiOnly()
    .except(['index', 'show'])
  Route.resource('permissions', 'PermissionController').apiOnly()
  Route.resource('roles', 'RoleController').apiOnly()
  Route.resource('addresses', 'AddressController').apiOnly()
  Route.resource('phones', 'PhoneController').apiOnly()
}).middleware('auth')
