<?php 
    $host = "localhost";
    $user = "root";
    $password = "";
    $database = "mydb";

    $connect = new mysqli($host,$user,$password,$database);
        if($connect->connect_error){
            echo"Connection Failed".$connect->connect_error;
        }


?>