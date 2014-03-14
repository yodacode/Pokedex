var pokemonControllers = angular.module('pokemonControllers', []);

//shared datas between controller

pokemonControllers.controller('pokemonHome', ['$scope', '$http',
	function ($scope, $http) { 

    //init template
        

    $scope.getId = function (uri) {
      id = uri.split('/')[3];
      return id;
    }
    
    $scope.select= function (i) {
      $scope.selectedIndex = i;
    };

    $scope.getPokemon = function (id) {
      
      $scope.loader = true;
      $scope.displayDetail = false;

      $http.get('api/pokemon.php', {
          params: { id: id }
      }).success(function (data) {        
          $scope.pokemon = data; 
          $scope.loader = false;
          $scope.abilities = data.abilities;
          $scope.displayDetail = true;
      });
    }

		$http.get('api/pokedex.php').success(function(data) {      
      $scope.pokemons = data.pokemon;
    });
	}
]);