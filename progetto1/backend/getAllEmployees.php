<?php

//importo la connessione
require("connessione.php");


if(!isset($_GET["size"])){
    $size = 2;
}else{
    $size = $_GET["size"];
}


if(!isset($_GET["page"])){
    $page = 0;
}else{
    $page = $_GET["page"];
}

$query = sprintf("select * from employees limit %d,%d",$size*$page,$size);


$risultato = $connect->query($query);
//print_r($risultato);

$risultato = mysqli_fetch_all($risultato, MYSQLI_ASSOC);
//print_r($risultato);

//trasformo in json
print_r(json_encode($risultato));

?>