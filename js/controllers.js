var pokemonControllers = angular.module('pokemonControllers', []);

pokemonControllers.controller('pokemonList', ['$scope', '$http',
  	function ($scope, $http) {
  	var id;

  	$scope.loading = true;
    $http.get('api/pokedex.php').success(function(data) {
    	for (var i=0; i < data.pokemon.length; i++) {
    		id = data.pokemon[i]['resource_uri'].split('/')[3];
    		data.pokemon[i].id = id;
    	}
    	$scope.pokemons = data.pokemon;
    	$scope.loading = false;
    });

}]);

pokemonControllers.controller('pokemonDetail', ['$scope', '$http', '$routeParams',
	function ($scope, $http, $routeParams) {
		$scope.loading = true;

		$http.get('api/pokemon.php', {
		    params: { id: $routeParams.id }
		}).success(function (data) {

  			$scope.pokemon = data;
  			$scope.moves = data.moves;
  			$scope.loading = false;

		});
}]);