<?php
include "../../database/connection.php";
include "../../classes/Artikl.php";
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/json');
ini_set('memory_limit', '2048M');
$data=json_decode(file_get_contents('php://input'));
$sQuery = "INSERT INTO  artikl SET Naziv=:naziv, Opis=:opis, Jmj=:jmj, JdCijena=:jdCijena,Kvantiteta=:kvantiteta, IdPotkategorije=:potkategorija";
$oStatement = $oConnection->prepare($sQuery);

$data->nazivArtikla = htmlspecialchars(strip_tags($data->nazivArtikla));
$data->opisArtikla = htmlspecialchars(strip_tags($data->opisArtikla));
$data->jedinicaMjereArtikla = htmlspecialchars(strip_tags($data->jedinicaMjereArtikla));
$data->cijenaArtikla = htmlspecialchars(strip_tags($data->cijenaArtikla));
$data->kolicinaArtikla = htmlspecialchars(strip_tags($data->kolicinaArtikla));
$data->kategorijaArtikla = htmlspecialchars(strip_tags($data->kategorijaArtikla));

$oStatement->bindParam(":naziv", $data->nazivArtikla);
$oStatement->bindParam(":opis", $data->opisArtikla);
$oStatement->bindParam(":jmj", $data->jedinicaMjereArtikla);
$oStatement->bindParam(":jdCijena", $data->cijenaArtikla);
$oStatement->bindParam(":kvantiteta", $data->kolicinaArtikla);
$oStatement->bindParam(":potkategorija", $data->kategorijaArtikla);
$oStatement->execute();

echo json_encode(array("poruka"=>"Artikl uspješno dodan!"));
?>