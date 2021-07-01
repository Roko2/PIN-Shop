<?php
include '../database/connection.php';
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/json');
ini_set('memory_limit', '2048M');
$data=json_decode(file_get_contents('php://input'));
$sQuery="SELECT * FROM zaposlenik WHERE Email=:email OR OIB=:oib";
$oStatement = $oConnection->prepare($sQuery);
$data->zaposlenikOIB = htmlspecialchars(strip_tags($data->zaposlenikOIB));
$data->zaposlenikEmail = htmlspecialchars(strip_tags($data->zaposlenikEmail));
$oStatement->bindParam(':email',$data->zaposlenikEmail);
$oStatement->bindParam(':oib',$data->zaposlenikOIB);
$oStatement->execute();     
$counter=$oStatement->rowCount();
if ($counter>0)
    {
        echo 0;
    }
   else{
       echo 1;
   }
        
    
?>