<?php
    include '../database/connection.php';
    // include "../path_helper.php";
    // include (ROOT ."\\database\\connection.php");

    header('Content-Type: text/html; charset=utf-8');
    header('Content-Type: application/json');
    ini_set('memory_limit', '2048M');
    $data=json_decode(file_get_contents('php://input'));  
    $sQuery = 'SELECT "Email,TajniKljuc" FROM zaposlenik WHERE Email=:email AND TajniKljuc COLLATE utf8mb4_0900_as_cs=:tajniKljuc LIMIT 0,1';
    $oStatement = $oConnection->prepare($sQuery);
    $oStatement->bindParam(':email',$data->email);
    $oStatement->bindParam(':tajniKljuc',$data->kljuc);
    $oStatement->execute();
    $counter=$oStatement->rowCount();
    if ($counter===1)
    {
        echo 1;
    }
   
        echo 0;
    

?>