var pokedexApp = angular.module('pokedexApp', [
	'ngRoute',
	'ngTouch',
	'pokemonControllers'
]);

pokedexApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/', {templateUrl: 'partials/pokemon.html'})
			.otherwise({redirectTo: '/'})

}]);

