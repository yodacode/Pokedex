var pokemonControllers = angular.module('pokemonControllers', []);

pokemonControllers.controller('pokemonHome', ['$scope', '$http',
	function ($scope, $http) {

    $scope.getId = function (uri) {
      id = uri.split('/')[3];
      return id;
    }

    $scope.submit = function () {
      var focusedId;
      if ($scope.pokemons[$scope.selectedIndex]) {
        focusedId = $scope.pokemons[$scope.selectedIndex].resource_uri.split('/')[3];
        $scope.getPokemon(focusedId);
      } else {
        return false;
      }
    }

    $scope.select= function (index) {
      $scope.selectedIndex = index;
    };

    $scope.selectUp = function (index) {
      if (index === undefined || index < 0) {
        $scope.selectedIndex = 0;
      } else {
        $scope.selectedIndex -= 1;
      }
    }

    $scope.selectDown = function (index) {
      if (index === undefined) {
        $scope.selectedIndex = 0;
      } else {
        $scope.selectedIndex += 1;
      }
    }

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

pokemonControllers.directive('ngArrowup', function () {
    return function (scope, element, attrs) {
      element.bind("keydown keypress", function (event) {
        if(event.which === 38) {
          scope.$apply(function (){
            scope.$eval(attrs.ngArrowup);
          });
          event.preventDefault();
        }
      });
    };
});

pokemonControllers.directive('ngArrowdown', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
          if(event.which === 40) {
            scope.$apply(function (){
              scope.$eval(attrs.ngArrowdown);
            });
            event.preventDefault();
          }
        });
    };
});

pokemonControllers.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
          if(event.which === 40) {
            scope.$apply(function (){
              scope.$eval(attrs.ngEnter);
            });
            event.preventDefault();
          }
        });
    };
});