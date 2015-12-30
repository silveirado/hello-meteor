angular
  .module('helloMeteor')
  .config(config);

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'client/templates/index.html',
			controller: "indexController"
    })

  $urlRouterProvider.otherwise('/');
}
