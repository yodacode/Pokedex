pokedexApp.controller('pokemonHome', function ($scope, $http, Pokemon, Move) {

    $scope.getLayout = function (layout) {
        $scope.displayDetailPokemon = false;
        $scope.displayListMoves = false;
        $scope.displayDetailMove = false;
        $scope[layout] = true;
    };

    $scope.select= function (index) {
        $scope.selectedIndex = index;
    };

    $scope.getPokemon = function (uri) {        

        //init the view
        $scope.loader = true;

        Pokemon.get(uri).then(function (pokemon) {
            console.log(pokemon);
            //store pokemon in the $scope
            $scope.pokemon = pokemon;
            //remove loarder
            $scope.loader = false;
            // display the detail view
            $scope.getLayout('displayDetailPokemon');
        }, function (msg) {
            alert(msg);
        });
    }

    $scope.getMoves = function (uri) {
        
        //init the view
        getLayout('displayListMoves')

    }

    $scope.getMove = function (uri) {
        
        //init the view
        $scope.loader = true;

        Move.get(uri).then(function (move) {
            console.log(move);
            //return;
            //store move in the $scope
            $scope.move = move;
            //remove loader
            $scope.loader = false;
            //$scope.displayDetailMove = true;
            $scope.getLayout('displayDetailMove');
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