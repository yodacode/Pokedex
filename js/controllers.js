var pokemonControllers = angular.module('pokemonControllers', []);


pokemonControllers.controller('pokemonList', ['$scope', '$http',
  function ($scope, $http) {
  	$scope.loading = true;
    $http.get('api/pokedex.php').success(function(data) {
    	$scope.pokemons = data.pokemon;
    	$scope.loading = false;
    }); 
    
}]);