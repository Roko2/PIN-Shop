<?php
include '../database/connection.php';
include '../classes/Artikl.php';
// include "../path_helper.php";
// include (ROOT ."\\database\\connection.php");
// include (ROOT ."\\classes\\Artikl.php");
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/json');
ini_set('memory_limit', '2048M');
$data=json_decode(file_get_contents('php://input'));
$sQuery="SELECT ID,Naziv,Opis,Jmj,Kvantiteta,JdCijena,NazivPotkategorije FROM artikl LEFT JOIN potkategorije on artikl.IdPotkategorije=potkategorije.IDpotkategorije WHERE ID=:idArtikla";
$oStatement = $oConnection->prepare($sQuery);
$oStatement->bindParam(':idArtikla',$data->idArtikla);
$oStatement->execute();
$oRow = $oStatement->fetch(PDO::FETCH_ASSOC);      
$oArtikl=new Artikl($oRow['ID'],$oRow['Naziv'],$oRow['Opis'],$oRow['Jmj'],$oRow['JdCijena'],$oRow['Kvantiteta'],$oRow['NazivPotkategorije']);
echo(json_encode($oArtikl));
?>
