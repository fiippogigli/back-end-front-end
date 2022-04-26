<?php
    
    $method = $_SERVER['REQUEST_METHOD'];
    $request = explode("/", substr(@$_SERVER['PATH_INFO'], 1));
    
    //per eliminare la memoria cache e setta il content-type a JSON
    header("Content-Type: application/json");
    header("Expires: 0");
    header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
    header("Cache-Control: no-store, no-cache, must-revalidate");
    header("Cache-Control: post-check=0, pre-check=0", false);
    header("Pragma: no-cache");





    switch ($method) {
        case "PUT":
            require("updateEmployees.php");
            break;
        case "POST":
            require("createEmployees.php");
            break;
        case "GET":
            require("getAllEmployees.php");
            break;
        case "delete":  
            require("deleteEmployees.php"); 
            break;
    }
?>