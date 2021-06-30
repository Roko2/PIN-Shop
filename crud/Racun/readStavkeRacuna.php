<?php
session_start();
include '../../database/connection.php';
include '../../classes/Stavka.php';
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/json');
ini_set('memory_limit', '2048M');
$data=json_decode(file_get_contents('php://input'));
$sQuery="SELECT UkCijena,Kolicina,artikl.ID,Naziv,Opis,Jmj,JdCijena,Kvantiteta,NazivPotkategorije,Aktivnost FROM stavka LEFT JOIN racun ON IdRacuna=racun.Sifra LEFT JOIN artikl ON artikl.ID=IdArtikla LEFT JOIN potkategorije ON potkategorije.IDPotkategorije=artikl.IdPotkategorije WHERE IdRacuna=:racunID";
$oStatement = $oConnection->prepare($sQuery);
$vStavkeRacuna=array();
$data->IdRacuna = htmlspecialchars(strip_tags($data->IdRacuna));
$oStatement->bindParam(":racunID", $data->IdRacuna);
$oStatement->execute();
while($oRow = $oStatement->fetch(PDO::FETCH_BOTH))
{
    $oStavka=new Stavka($oRow['ID'],$oRow['UkCijena'],$oRow['Kolicina'],$oRow['ID'],$oRow['Naziv'],$oRow['Opis'],$oRow['Jmj'],$oRow['JdCijena'],$oRow['Kvantiteta'],$oRow['NazivPotkategorije'],$oRow['Aktivnost']);
    array_push($vStavkeRacuna,$oStavka);
}
echo(json_encode($vStavkeRacuna));
?>