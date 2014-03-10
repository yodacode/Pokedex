var pokemonControllers = angular.module('pokemonControllers', []);

pokemonControllers.controller('pokemonList', ['$scope', '$http',
  function ($scope, $http) {
  	$scope.loading = true;
    $http.get('api/pokedex.php').success(function(data) {
    	console.log(data.pokemon);
    	$scope.pokemons = data.pokemon;

    	$scope.loading = false;
    });

}]);

pokemonControllers.controller('pokemonDetail', ['$scope', '$http',
	function ($scope, $http) {
  	
}]);