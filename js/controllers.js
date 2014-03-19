pokedexApp.factory('Pokemon', function ($http, $q) {
    var factory = {
        pokemons: false,
        getPokemons: function () {
            var deferred = $q.defer();

            $http.get('api/pokedex.php')
                .success(function (data, status) {
                    factory.pokemons = data.pokemon;
                    deferred.resolve(factory.pokemons);
                }).error(function (data, status) {
                    deferred.reject('Impossible to retrive pokemons.');
                });
            return deferred.promise;
        },
        getPokemon: function (uri) {
            var deferred = $q.defer();

            $http.get('api/pokedex.php')
                .success(function (data, status) {
                    factory.pokemons = data.pokemon;
                    deferred.resolve(factory.pokemons);
                }).error(function (data, status) {
                    deferred.reject('Impossible to retrive pokemons.');
                });

            $http.get('api/pokemon.php', {
                params: { uri: uri }
            }).success(function (data, status) {
                factory.pokemon = data;
                deferred.resolve(factory.pokemon);
            }).error(function (data, status) {
                deferred.reject('Impossible to retrive pokemons.');
            });

            return deferred.promise;
        }
    }
    return factory;
}
);

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

        Pokemon.getPokemon(id).then(function (pokemon) {
            $scope.pokemon = pokemon;
            $scope.loader = false;
            $scope.abilities = pokemon.abilities;
            $scope.displayDetail = true;
        }, function (msg) {
            alert(msg);
        });
    }

    Pokemon.getPokemons().then(function (pokemons) {
        $scope.pokemons = pokemons;
    }, function (msg) {
        alert(msg);
    });

	}
);
