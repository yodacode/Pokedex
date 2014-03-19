var pokedexApp = angular.module('pokedexApp', [
	'ngRoute'
]);

pokedexApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/', {templateUrl: 'partials/pokemon.html'})
			.otherwise({redirectTo: '/'})
}]);

