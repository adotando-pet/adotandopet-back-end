'use strict'

const Route = use('Route')

/**
 * Public Routes
 */
Route.get('/', () => {
  return { greeting: 'Welcome to Adotando.Pet!' }
})

Route.post('users', 'UserController.store')
Route.get('categories', 'CategoryController.index')
Route.get('categories/:id', 'CategoryController.show')
Route.get('advertisements', 'AdvertisementController.index')
Route.get('advertisements/:id', 'AdvertisementController.show')
Route.get('files/:id', 'FileController.show')
Route.get('advertisements/pictures/:id', 'AdvertisementFileController.show')

Route.post('sessions', 'SessionController.store').validator('Session/Store')

Route.post('forgot-password', 'ForgotPasswordController.store').validator(
  'ForgotPassword/Store'
)
Route.put('forgot-password', 'ForgotPasswordController.update').validator(
  'ForgotPassword/Update'
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
  Route.resource('files', 'FileController')
    .apiOnly()
    .except(['show'])

  Route.get('/pets','PetController.index')
  Route.post('/pets', 'PetController.store').validator('Pet/Store')
  Route.get('/pets/:id', 'PetController.show' )
  Route.put('/pets/:id','PetController.update').validator('Pet/Update')
  Route.delete('/pets/:id','PetController.destroy')

  }).middleware('auth')
