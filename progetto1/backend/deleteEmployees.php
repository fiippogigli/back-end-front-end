<?php

//importo la connessione
require("connessione.php");




if(isset($_GET["id"])){
    $query = sprintf("delete from employees where id=%d",$_GET["id"]);
    $risultato = $connect->query($query);
    if(!$risultato){
        echo"errore risultato";
    }
}else{
    echo"ERRORE IL CAMPO ID E' VUOTO";
}




?>