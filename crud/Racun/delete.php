<?php
include "../../database/connection.php";
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/json');
ini_set('memory_limit', '2048M');
$data=json_decode(file_get_contents('php://input'));
$sQuery = "DELETE racun , stavka  FROM racun  INNER JOIN stavka WHERE racun.Sifra=stavka.IdRacuna AND racun.Sifra =:idRacuna";
$oStatement = $oConnection->prepare($sQuery);
$data->IDracuna = htmlspecialchars(strip_tags($data->IDracuna));
$oStatement->bindParam(":idRacuna", $data->IDracuna);
$oStatement->execute();

 echo json_encode(array("poruka"=>"Račun uspješno obrisan!"));
?>