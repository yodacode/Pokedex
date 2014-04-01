pokedexApp.controller('pokemonHome', function ($scope, $http, Pokemon, Move) {

    $scope.select= function (index) {
        $scope.selectedIndex = index;
    };

    $scope.getPokemon = function (uri) {        

        //init the view
        $scope.loader = true;
        $scope.displayDetailPokemon = false;
        $scope.displayListMoves = false;
        $scope.displayDetailMove = false;

        Pokemon.get(uri).then(function (pokemon) {
            console.log(pokemon);
            //store pokemon in the $scope
            $scope.pokemon = pokemon;
            //remove loarder
            $scope.loader = false;
            // display the detail view
            $scope.displayDetailPokemon = true;
        }, function (msg) {
            alert(msg);
        });
    }

    $scope.getMoves = function (uri) {
        
        //init the view
        $scope.displayDetailPokemon = false;
        $scope.displayListMoves = true;

    }

    $scope.getMove = function (uri) {
        
        //init the view
        $scope.loader = true;
        $scope.displayDetailPokemon = false;
        $scope.displayListMoves = false;
        $scope.displayDetailMove = false;

        Move.get(uri).then(function (move) {
            console.log(move);
            //return;
            //store move in the $scope
            $scope.displayDetailMove = true;
            $scope.move = move;
            //remove loader
            $scope.loader = false;
        }, function (msg) {
            alert(msg);
        });
    }


    //init
    Pokemon.getAll().then(function (pokemons) {
        $scope.pokemons = pokemons;
    }, function (msg) {
        alert(msg);
    });

});