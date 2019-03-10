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
Route.get('advertisements', 'AdvertisementController.index')
Route.get('advertisements/:id', 'AdvertisementController.show')
Route.get('advertisements/comments/:id', 'CommentController.show')
Route.get('files/:id', 'FileController.show')
Route.get('advertisements/pictures/:id', 'AdvertisementFileController.show')

Route.post('sessions', 'SessionController.store').validator('Session/Store')

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
  Route.resource('advertisements', 'AdvertisementController')
    .apiOnly()
    .except(['index', 'show'])
  Route.get('advertisements/adoptions', 'AdoptionController.index')
  Route.post(
    'advertisements/:advertisement_id/adoptions',
    'AdoptionController.store'
  )
  Route.get('advertisements/adoptions/:id', 'AdoptionController.show')
  Route.put('advertisements/adoptions/:id', 'AdoptionController.update')
  Route.delete('advertisements/adoptions/:id', 'AdoptionController.destroy')
  Route.get('advertisements/comments', 'CommentController.index')
  Route.post(
    'advertisements/:advertisement_id/comments',
    'CommentController.store'
  )
  Route.put('advertisements/comments/:id', 'CommentController.update')
  Route.delete('advertisements/comments/:id', 'CommentController.destroy')
  Route.resource('files', 'FileController')
    .apiOnly()
    .except(['show'])
  Route.get('advertisements/pictures', 'AdvertisementFileController.index')
  Route.post(
    'advertisements/:advertisement_id/pictures',
    'AdvertisementFileController.store'
  )
  Route.put('advertisements/pictures/:id', 'AdvertisementFileController.update')
  Route.delete(
    'advertisements/pictures/:id',
    'AdvertisementFileController.destroy'
  )
}).middleware('auth')
