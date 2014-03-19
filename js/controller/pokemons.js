pokedexApp.controller('pokemonHome', function ($scope, $http, Pokemon) {

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

    $scope.getPokemon = function (id) {

        $scope.loader = true;
        $scope.displayDetail = false;

        Pokemon.get(id).then(function (pokemon) {
            $scope.pokemon = pokemon;
            $scope.loader = false;
            $scope.abilities = pokemon.abilities;
            $scope.displayDetail = true;
        }, function (msg) {
            alert(msg);
        });
    }

    Pokemon.getAll().then(function (pokemons) {
        $scope.pokemons = pokemons;
    }, function (msg) {
        alert(msg);
    });

	}
);