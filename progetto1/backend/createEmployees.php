<?php

//importo la connessione
require("connessione.php");

$data = json_decode(file_get_contents('php://input'),true);


$name = $data["first_name"];
$lastName = $data["last_name"];
$gender = $data["gender"];


$query = sprintf("insert into employees(first_name, last_name, gender) values ('%s','%s','%s')",$name, $lastName, $gender);


$risultato = $connect->query($query);
//print_r($risultato);

?>