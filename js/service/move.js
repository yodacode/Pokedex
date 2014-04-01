pokedexApp.factory('Move', function ($http, $q) {
	var factory = {
		attacks: false,

		//get one ability
		get: function (uri) {
			var deferred = $q.defer();

			$http.get('api/move.php', {
				params: { uri: uri }
			}).success(function (data, status) {
				factory.ability = data;
				deferred.resolve(factory.ability);
			}).error(function () {
				deferred.reject('Impossible to retrieve the ability')
			});
			
			return deferred.promise;
		}
	}

	return factory;
});