<?php 
include "../../database/connection.php";
include "../../classes/Artikl.php";
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/x-www-form-urlencoded');
ini_set('memory_limit', '2048M');
$data=json_decode(file_get_contents('php://input'));
$sQuery = "UPDATE artikl SET Naziv=:naziv, Opis=:opis, JdCijena=:jdCijena,Kvantiteta=:kolicina, IdPotkategorije=:potkategorija WHERE ID=:idArtikla";
$oStatement = $oConnection->prepare($sQuery);
$kategorija=preg_replace("/[^0-9]/", "", $data->kategorijaArtikla);
$data->idArtikla = htmlspecialchars(strip_tags($data->idArtikla));
$data->nazivArtikla = htmlspecialchars(strip_tags($data->nazivArtikla));
$data->opisArtikla = htmlspecialchars(strip_tags($data->opisArtikla));
$data->cijenaArtikla = htmlspecialchars(strip_tags($data->cijenaArtikla));
$data->kolicinaArtikla = htmlspecialchars(strip_tags($data->kolicinaArtikla));
$kategorija = htmlspecialchars(strip_tags($kategorija));

$oStatement->bindParam(":idArtikla", $data->idArtikla);
$oStatement->bindParam(":naziv", $data->nazivArtikla);
$oStatement->bindParam(":opis", $data->opisArtikla);
$oStatement->bindParam(":jdCijena", $data->cijenaArtikla);
$oStatement->bindParam(":kolicina", $data->kolicinaArtikla);
$oStatement->bindParam(":potkategorija", $kategorija);
$oStatement->execute();

echo json_encode(array("poruka"=>"Artikl uspješno azuriran!"));
?>