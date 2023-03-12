/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', () => {
  return 'API de op-ent. Read more on https://docs.op-ent.fr.'
})

/*
|--------------------------------------------------------------------------
| API v1
|--------------------------------------------------------------------------
|
| This group is responsible for managing v1 routes.
|
*/
Route.group(() => {
  /*
  |--------------------------------------------------------------------------
  | Public routes
  |--------------------------------------------------------------------------
  |
  | This group is responsible for managing public routes, i.e. not protected
  | by the auth middleware.
  |
  */
  Route.group(() => {
    /*
    |--------------------------------------------------------------------------
    | Auth routes
    |--------------------------------------------------------------------------
    |
    | This group is responsible for managing auth routes.
    |
    */
    Route.group(() => {
      Route.post('login', 'AuthController.login')
      Route.post('register', 'AuthController.register')
    }).prefix('auth')
  })

  /*
  |--------------------------------------------------------------------------
  | Protected routes
  |--------------------------------------------------------------------------
  |
  | This group is responsible for managing protected routes, i.e. protected
  | by the auth middleware.
  |
  */
  Route.group(() => {
    /*
    |--------------------------------------------------------------------------
    | Shared routes
    |--------------------------------------------------------------------------
    |
    | This group is responsible for managing routes shared between all types of
    | users.
    |
    */
    Route.group(() => {
      Route.get('/profile/:id', 'ProfilesController.show').where('id', {
        match: /^[0-9]+$/,
        cast: (id) => Number(id),
      })
    }).prefix('shared')

    /*
    |--------------------------------------------------------------------------
    | Students routes
    |--------------------------------------------------------------------------
    |
    | This group is responsible for managing routes related to students.
    |
    */
    Route.group(() => {}).prefix('students')

    /*
    |--------------------------------------------------------------------------
    | Teachers routes
    |--------------------------------------------------------------------------
    |
    | This group is responsible for managing routes related to teachers.
    |
    */
    Route.group(() => {}).prefix('teachers')

    /*
    |--------------------------------------------------------------------------
    | Staff routes
    |--------------------------------------------------------------------------
    |
    | This group is responsible for managing routes related to staff.
    |
    */
    Route.group(() => {}).prefix('staff')

    /*
    |--------------------------------------------------------------------------
    | Admin routes
    |--------------------------------------------------------------------------
    |
    | This group is responsible for managing routes related to admin.
    |
    */
    Route.group(() => {
      /*
      |--------------------------------------------------------------------------
      | Users resource
      |--------------------------------------------------------------------------
      |
      | Restful routes for users.
      |
      */
      Route.resource('users', 'UsersController')
        .apiOnly()
        .where('id', {
          match: /^[0-9]+$/,
          cast: (id) => Number(id),
        })
    })
      .prefix('admin')
      .middleware('role:admin')
  }).middleware('auth')
}).prefix('v1')
