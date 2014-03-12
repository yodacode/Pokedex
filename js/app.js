var pokedexApp = angular.module('pokedexApp', [
	'ngRoute',
	'pokemonControllers'
]);

pokedexApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/', {templateUrl: 'partials/list.html'})
			.when('/detail/:id', {templateUrl: 'partials/detail.html'})
			.otherwise({redirectTo: '/'})

}]);

