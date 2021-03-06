/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */
module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
   * etc. depending on your default view engine) your home page.              *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/
  '/': {
    view: 'homepage'
  },
  'post /api/v1-0/incomeinsert': 'IncomeController.create',
  'put /api/v1-0/incomeupdate': 'IncomeController.update',
  'get /api/v1-0/incomefind': 'IncomeController.find',
  'delete /api/v1-0/incomedelete': 'IncomeController.delete',
  'get /api/v1-0/incomefindOne/:id': 'IncomeController.findOne',
  'post /api/v1-0/reasoncreate': 'ReasonController.create',
  'put /api/v1-0/reasonupdate': 'ReasonController.update',
  'get /api/v1-0/reasonfind': 'ReasonController.findAll',
  'get /api/v1-0/reasonfindOne/:name': 'ReasonController.findOne',
  'delete /api/v1-0/reasondelete': 'ReasonController.delete',
  //for user
  'post /api/v1-0/createuser': 'UserController.create',
  'put /api/v1-0/updateuser': 'UserController.update',
  'delete /api/v1-0/deleteuser': 'UserController.delete',
  'get /api/v1-0/finduser/:mobile/': 'UserController.findOne',
  'get /api/v1-0/alluser': 'UserController.findAll',
  /***************************************************************************
   *                                                                          *
   * Custom routes here...                                                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the custom routes above, it   *
   * is matched against Sails route blueprints. See `config/blueprints.js`    *
   * for configuration options and examples.                                  *
   *                                                                          *
   ***************************************************************************/
};