<?php 
	header('Content-type: application/json');
	
	// Get cURL resource
	$curl = curl_init();
	
	// Set some options - we are passing in a useragent too here
	curl_setopt_array($curl, array(
	    CURLOPT_RETURNTRANSFER => 1,
	    CURLOPT_URL => 'http://pokeapi.co/api/v1/pokedex/1/',
	));

	// Send the request & save response to $resp
	$resp = curl_exec($curl);

	// Close request to clear up some resources
	echo $resp;
	curl_close($curl);

 ?>