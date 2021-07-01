<?php
include '../../database/connection.php';
include '../../classes/Artikl.php';
header('Content-Type:text/html; charset=utf-8');
header('Content-Type: application/json');
ini_set('memory_limit', '2048M');

$sQuery="SELECT ID,Naziv,Opis,Jmj,Kvantiteta,JdCijena,NazivPotkategorije,Aktivnost FROM artikl INNER JOIN potkategorije on artikl.IdPotkategorije=potkategorije.IDpotkategorije WHERE artikl.Aktivnost=0";
$oRecord = $oConnection->query($sQuery);
$vNeaktivniArtikli=array();
while($oRow = $oRecord->fetch(PDO::FETCH_BOTH))
    {   
        $oArtikl=new Artikl($oRow['ID'],$oRow['Naziv'],$oRow['Opis'],$oRow['Jmj'],$oRow['JdCijena'],$oRow['Kvantiteta'],$oRow['NazivPotkategorije'],$oRow['Aktivnost']);
        array_push($vNeaktivniArtikli,$oArtikl);
    }
     echo json_encode($vNeaktivniArtikli);
?>