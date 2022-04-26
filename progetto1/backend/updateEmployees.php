<?php

//importo la connessione
require("connessione.php");

$data = json_decode(file_get_contents('php://input'),true);


$name = $data["first_name"];
$lastName = $data["last_name"];
$gender = $data["gender"];


$query = sprintf("update employees set first_name='%s', last_name='%s', gender='%s' where id=%d",$name, $lastName, $gender, $_GET["id"]);


$risultato = $connect->query($query);
//print_r($risultato);

?>