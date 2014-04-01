<?php
	header('Content-type: application/json');

	$curl = curl_init();

	curl_setopt_array($curl, array(
	    CURLOPT_RETURNTRANSFER => 1,
	    CURLOPT_URL => 'http://pokeapi.co/' . $_GET['uri'],
	));

	$resp = curl_exec($curl);

	echo $resp;
	curl_close($curl);

 ?>