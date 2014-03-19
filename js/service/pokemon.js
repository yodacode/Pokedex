pokedexApp.factory('Pokemon', function ($http, $q) {
    var factory = {
        pokemons: false,

        getAll: function () {
            var deferred = $q.defer();
            
            // if pokemons are already store in the factory object
            if (factory.pokemons !== false) {
                deferred.resolve(factory.pokemons);
            } else {
                $http.get('api/pokedex.php')
                    .success(function (data, status) {
                        factory.pokemons = data.pokemon;
                        deferred.resolve(factory.pokemons);
                    }).error(function (data, status) {
                        deferred.reject('Impossible to retrive pokemons.');
                    });
                return deferred.promise;
            }
        },

        get: function (uri) {
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
});