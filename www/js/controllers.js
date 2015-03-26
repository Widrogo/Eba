angular.module('starter.controllers', [])

.filter('trustUrl', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
})
.factory('productosService', function(){
        var productos =[
            {
                "id": 1,
                "producto": "ALFAFOR DE ALMENDRA",
                "img": "../img/alfafor.jpg",
                "descripcion": [
                    "Este producto está constituido por dos galletas, elaboradas a base de harina de trigo, harina de almendra, mantequilla y azúcar, es un producto horneado.",
                    "Estas galletas están separadas entre sí por un relleno de chocolate mezclada con harina de almendra, es un producto dulce al consumirlo, el sabor del chocolate le da el toque especial que se estaba buscando."
                ]
            },
            {

                "id": 2,
                "producto": "ALMENDRAS",
                "img": "../img/almendras.jpg",
                "descripcion": [
                    "Aunque están cargados de ácidos grasos insaturados, todavía hay personas y profesionales de la salud que consideran que los frutos secos engordan, por este motivo, es importante romper este mito.",
                    "En comparación con una dieta baja en grasa, proporcionaron beneficios significativos en los niveles de glucosa en plasma, resistencia a la insulina, y una reducción de los factores clásicos de riesgo cardiovascular."
                ]
            },
            {

                "id": 3,
                "producto": "MUFFIN DE ALMENDRA",
                "img": "../img/muffin.jpg",
                "descripcion": [
                    "Un muffin es un producto de repostería, elaborado con harina de trigo y otros ingredientes, sobre todo dulces, en este caso adicionando también harina de almendra, este es un producto horneado en moldes que presentan una base cilíndrica y una superficie más ancha.",
                    "Este es un producto que entre sus características presenta esponjosidad, y es una masa dulce, además de ser una masa húmeda, se le adicionan diferentes ingredientes para darle un sabor especial."
                ]
            },
            {

                "id": 4,
                "producto": "TURRÓN DE ALMENDRA",
                "img": "../img/turron.jpg",
                "descripcion": [
                    "El turrón es un dulce, característico de Navidad, es un producto elaborado con almendra y miel principalmente. ",
                    "Turrón es un dulce obtenido por la cocción de miel, con incorporación y amasado de almendras trituradas, y clara de huevo, esta masa se coloca como relleno, en las galletas (ostias)."
                ]
            },
            {

                "id": 5,
                "producto": "BESO DE PANDO",
                "img": "../img/beso.jpg",
                "descripcion": [
                    "Es un dulce de mazapán, cubierto con chocolate.",
                    "El Mazapan es un dulce obtenido a partir de la molienda, mezcla y compactación de almendras seleccionadas, limpias libres de cascarilla, adicionadas con azúcar glass, licores y esencias."
                ]
            },
            {

                "id": 6,
                "producto": "CAJA DE GALLETAS DE ALMENDRA",
                "img": "../img/galletas.jpg",
                "descripcion": [
                    "Las galletas de almendra y salvado de trigo es un alimento rico en selenio, fosforo, zinc y potasio, además de Fibra y hierro.",
                    "El salvado de trigo es un alimento sin colesterol y por lo tanto, su consumo ayuda a mantener bajo el colesterol, lo cual es beneficioso para nuestro sistema circulatorio y nuestro corazón.",
                    "Además la Nuez Amazónica, es un antioxidante natural, contiene vitamina E, ricas en proteínas y aminoácidos esenciales ideales para personas con problemas nutricionales. De la oleosa nuez de Brasil se extrae un aceite rico en grasas no saturadas que sirve para las personas con problemas de colesterol. Aporta vitaminas y minerales, como vitamina C, provitamna A, vitamina B1 y B2; los minerales calcio, fósforo y hierro."
                ]
            }
        ];
        return productos;
})
.factory('recetaService', function() {

    var recetas = [
        {
            "id": 1,
            "receta": "Bizcocho o torta de almendra",
            "link": "https://www.youtube.com/embed/DXb1YGTC3IU",
            "ingredientes": [
                "6 huevos",
                 "20 gr de almendra molida",
                 "35 gr de harina de trigo",
                 "200 gr de azúcar",
                 "sal",
                 "Canela molida"
            ]
        },
        {
            "id": 2,
            "receta": "Tarta de chocolate almendras y naranja",
            "link": "https://www.youtube.com/embed/y18prsXFm2I",
            "ingredientes": [
                "170 gr de almendra molida",
                "150 gr de azúcar",
                "6 huevos",
                "85 gr de mantequilla",
                "185 gr de chocolate",
                "Esencia de vainilla",
                "Ralladura de naranja"
            ]
        },
        {
            "id": 3,
            "receta": "Plumcake de ciruelas y almendras",
            "link": "https://www.youtube.com/embed/hOTj4FYNT0Y",
            "ingredientes": [
                "Masa para bizcocho",
                "Ciruelas en trozos",
                "Almendra rallada",
                "Harina",
                "Mantequilla"
            ]
        },
        {
            id: 4,
            receta: "Budín de almendras",
            link: "https://www.youtube.com/embed/8ws92EwdTiY",
            ingredientes: [
                "1 lt de leche",
                "2 tazas de azúcar granulada",
                "3 huevos",
                "1 cucharilla de Vainilla",
                "1 cucharilla de esencia de ron",
                "5 tazas de pan en trozos",
                "Azúcar (a gusto)",
                "Mantequilla",
                "395 gr de leche condensada",
                "1/5 taza de almendra entera"
            ]
        },
        {
            id: 5,
            receta: "Galletas de almendra",
            link: "https://www.youtube.com/embed/prmbAUtU7_c",
            ingredientes: [
                "150 gr de almendra molida",
                "90 gr de azúcar glas",
                "35 gr de harina de trigo",
                "1 cucharilla de levadura",
                "1 huevo",
                "1 pisca de sal",
                "1/5 cucharilla de esencia de vainilla",
                "Azúcar glas para (rebosar, redosar)"
            ]
        },
        {
            id: 6,
            receta: "Tarta de manzana con almendras",
            link: "https://www.youtube.com/embed/yFIcuAZTvn8",
            ingredientes: [
                "225 gr de harina",
                "225 gr de azúcar",
                "150 gr de mantequilla sin sal derretida",
                "2 huevos",
                "1 cucharilla y ½ de polvo de hornear",
                "350 gr de manzanas peladas y sin corazón",
                "3 gotas de extracto de almendra",
                "Azúcar moreno al gusto",
                "Canela al gusto",
                "25 gr de almendras laminadas",
                "Azúcar glas"
            ]
        },
        {
            id: 7,
            receta: "Tarta de pera y almendras",
            link: "https://www.youtube.com/embed/HzWmRwo2638",
            ingredientes: [
                "4 peras peladas sin corazón ",
                "240 gr de almendra molida",
                "4 huevos",
                "180 gr de azúcar morena",
                "180 gr de mantequilla sin sal",
                "80 gr de harina",
                "90 gr de azúcar morena (extra)",
                "½ cucharilla de canela",
                "4 cucharas de zumo de limón",
                "40 gr de almendras en trocitos",
                "1 cucharilla de polvo de hornear",
                "2 cucharas de azúcar glas"
            ]
        },
        {
            id: 8,
            receta: "Roles de canela con nueces y almendra",
            link: "https://www.youtube.com/embed/99_izPyBUPc",
            ingredientes: [
                "1 sobre de levadura 11g (0.4 oz)",
                "1/3 de taza de agua tibia",
                "1 cucharilla de azúcar",
                "1 barra de mantequilla derretida (90 g) 3.1 oz",
                "½ de taza de leche",
                "¼ de taza de sal",
                "1 huevo",
                "3 ½ a 4 tazas de harina + harina extra para que no se pegue",
                "½ barrita de mantequilla",
                "Almendra molida o picadas al gusto",
                "Nuez picada al gusto",
                "Canela molida",
                "1 taza de azúcar glas",
                "Vainilla",
                "Leche"
            ]
        }
    ];
    return recetas;
})
.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('NosotrosCtrl', function($scope, $state) {
      $scope.moveNosotros = function() {
          $state.go("app.nosotros");
      };
      $scope.moveProductos= function() {
          $state.go("app.productos");
      };
      $scope.moveRSE= function() {
          $state.go("app.rse");
      };
      $scope.moveRecetas= function() {
          $state.go("app.recetas");
      };
      $scope.moveReservas= function() {
          $state.go("app.reservas");
      };
      $scope.moveContactenos= function() {
          $state.go("app.contactenos");
      };
})
.controller('RecetaCtrl', function($scope, $stateParams, $state, recetaService) {
    if($stateParams.recetasId){
        var byReceta = {};
        recetaService.forEach(function(receta) {
            byReceta[receta.id] = receta;
        });
        $scope.recetario = byReceta[$stateParams.recetasId];
    }else{
        $state.go("app.playlists");
    }
})
.controller('ProductosCtrl', function($scope, $state, productosService) {
    $scope.productos = productosService;
})
.controller('ProductoCtrl', function($scope, $stateParams, productosService) {
    console.log();
    if($stateParams.productosId){
        var byProducto = {};
        productosService.forEach(function(producto) {
            byProducto[producto.id] = producto;
        });
        $scope.product = byProducto[$stateParams.productosId];
    }else{
        $state.go("app.productos");
    }
        console.log($scope.product);
})
.controller('RecetasCtrl', function($scope, recetaService) {
        $scope.recetas = recetaService;
});
