<?php
include '../database/connection.php';
include '../classes/Artikl.php';
header('Content-Type:text/html; charset=utf-8');
ini_set('memory_limit', '2048M');

$data=json_decode(file_get_contents('php://input')); 
$sQuery="SELECT ID,Naziv,Opis,Jmj,JdCijena,NazivPotkategorije FROM artikl INNER JOIN potkategorije on artikl.IdPotkategorije=potkategorije.IDpotkategorije WHERE artikl.IdPotkategorije=:potkategorija";
$oStatement = $oConnection->prepare($sQuery);
$oStatement->bindParam(':potkategorija',$data->potkategorijaID);
$oStatement->execute();
$vArtikliPotkategorije=array();
while($oRow = $oStatement->fetch(PDO::FETCH_BOTH))
    {
        $oArtikl=new Artikl($oRow['ID'],$oRow['Naziv'],$oRow['Opis'],$oRow['Jmj'],$oRow['JdCijena'],$oRow['NazivPotkategorije']);
        array_push($vArtikliPotkategorije,$oArtikl);
    }
     echo json_encode($vArtikliPotkategorije);
?>