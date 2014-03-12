var pokedexApp = angular.module('pokedexApp', [
	'ngRoute',
	'ngTouch',
	'pokemonControllers'
]);

pokedexApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/', {templateUrl: 'partials/list.html'})
			.when('/detail/:id', {templateUrl: 'partials/detail.html'})
			.when('/pokemon', {templateUrl: 'partials/pokemon.html'})
			.otherwise({redirectTo: '/'})

}]);

