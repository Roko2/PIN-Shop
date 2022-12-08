<?php
include '../../database/connection.php';
include '../../classes/Artikl.php';

// include "../path_helper.php";
// include (ROOT ."\\database\\connection.php");
// include (ROOT ."\\classes\\Artikl.php");
header('Content-Type:text/html; charset=utf-8');
header('Content-Type: application/json');
ini_set('memory_limit', '2048M');

$data=json_decode(file_get_contents('php://input')); 
$sQuery="SELECT * FROM artikl INNER JOIN potkategorije ON potkategorije.KategorijaID=:kategorija WHERE artikl.IdPotkategorije=potkategorije.IDPotkategorije";
$oStatement = $oConnection->prepare($sQuery);
$oStatement->bindParam(':kategorija',$data->kategorijaID);
$oStatement->execute();
$vArtikliKategorije=array();
while($oRow = $oStatement->fetch(PDO::FETCH_BOTH))
    {   
        $oArtikl=new Artikl($oRow['ID'],$oRow['Naziv'],$oRow['Opis'],$oRow['Jmj'],$oRow['JdCijena'],$oRow['Kvantiteta'],$oRow['NazivPotkategorije'],$oRow['Aktivnost']);
        array_push($vArtikliKategorije,$oArtikl);
    }
     echo json_encode($vArtikliKategorije);
?>