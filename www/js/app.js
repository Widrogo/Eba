// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
  .state('app.nosotros', {
    url: "/nosotros",
    views: {
      'menuContent': {
         templateUrl: "templates/nosotros.html"
      }
    }
  })
  .state('app.productos', {
    url: "/productos",
    views: {
      'menuContent': {
         templateUrl: "templates/productos.html",
         controller: "ProductosCtrl"
      }
    }
  })
  .state('app.producto', {
    url: "/producto/:productosId",
    views: {
      'menuContent': {
         templateUrl: "templates/producto.html",
         controller: "ProductoCtrl"
      }
    }
  })
  .state('app.rse', {
    url: "/rse",
    views: {
      'menuContent': {
         templateUrl: "templates/rse.html"
      }
    }
  })
  .state('app.reservas', {
    url: "/reservas",
    views: {
      'menuContent': {
         templateUrl: "templates/reservas.html",
         controller: "ReservasCtrl"
      }
    }
  })
      .state('app.reserva', {
          url: "/reserva/:reservaId",
          views: {
              'menuContent': {
                  templateUrl: "templates/reserva.html",
                  controller: "ReservaCtrl"
              }
          }
      })
    .state('app.recetas', {
        url: "/recetas",
        views: {
            'menuContent': {
                templateUrl: "templates/recetas.html",
                controller: 'RecetasCtrl'
            }
        }
    })
      .state('app.single', {
          url: "/recetas/:recetasId",
          views: {
              'menuContent': {
                  templateUrl: "templates/receta.html",
                  controller: 'RecetaCtrl'
              }
          }
      })
      .state('app.contactenos', {
          url: "/contactenos",
          views: {
              'menuContent': {
                  templateUrl: "templates/contactenos.html"
              }
          }
      })
      .state('app.playlists', {
      url: "/Menu",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'NosotrosCtrl'
        }
      }
    });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/Menu');
});
