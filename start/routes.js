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

  Route.resource('permissions', 'PermissionController').apiOnly()
  Route.resource('roles', 'RoleController').apiOnly()
  Route.resource('advertisements', 'AdvertisementController')
    .apiOnly()
    .except(['index', 'show'])
  Route.resource('addresses', 'AddressController').apiOnly()
  Route.get('advertisements/adoptions', 'AdoptionController.index')
  Route.post(
    'advertisements/:advertisement_id/adoptions',
    'AdoptionController.store'
  )
  Route.get('advertisements/adoptions/:id', 'AdoptionController.show')
  Route.put('advertisements/adoptions/:id', 'AdoptionController.update')
  Route.delete('advertisements/adoptions/:id', 'AdoptionController.destroy')


  Route.get('/pets','PetController.index')
  Route.post('/pets', 'PetController.store').validator('Pet/Store')
  Route.get('/pets/:id', 'PetController.show' )
  Route.put('/pets/:id','PetController.update').validator('Pet/Update')
  Route.delete('/pets/:id','PetController.destroy')

  Route.get('/phones','PhoneController.index')
  Route.post('/phones', 'PhoneController.store').validator('Phone/Store')
  Route.get('/phones/:id', 'PhoneController.show' )
  Route.put('/phones/:id','PhoneController.update').validator('Phone/Update')
  Route.delete('/phones/:id','PhoneController.destroy')

  Route.get('/files','FileController.index')
  Route.post('/files', 'FileController.store').validator('File/Store')
  Route.put('/files/:id','FileController.update').validator('File/Update')
  Route.delete('/files/:id','FileController.destroy')

  Route.get('/addresses','AddressController.index')
  Route.post('/addresses', 'AddressController.store').validator('Address/Store')
  Route.get('/addresses/:id', 'AddressController.show' )
  Route.put('/addresses/:id','AddressController.update').validator('Address/Update')
  Route.delete('/addresses/:id','AddressController.destroy')

  Route.post('/categories', 'CategoryController.store').validator('Category/Store')
  Route.put('/categories', 'CategoryController.update').validator('Category/Update')
  Route.delete('/categories', 'CategoryController.destory')

  }).middleware('auth')
