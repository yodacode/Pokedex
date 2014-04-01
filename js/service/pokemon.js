pokedexApp.factory('Pokemon', function ($http, $q) {
    var factory = {
        pokemons: false,

        //get all pokemons
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
                    }).error(function () {
                        deferred.reject('Impossible to retrieve pokemons.');
                    });
                return deferred.promise;
            }
        },

        //get one pokemon
        get: function (uri) {
            var deferred = $q.defer();

            $http.get('api/pokemon.php', {
                params: { uri: uri }
            }).success(function (data, status) {
                factory.pokemon = data;
                deferred.resolve(factory.pokemon);
            }).error(function () {
                deferred.reject('Impossible to retrieve the pokemon.');
            });

            return deferred.promise;
        }
    }
    return factory;
});