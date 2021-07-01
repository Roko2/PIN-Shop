<?php 
include "../../database/connection.php";
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/json');
ini_set('memory_limit', '2048M');
$data=json_decode(file_get_contents('php://input'));
$sQuery = "UPDATE artikl SET Aktivnost=:aktivnost WHERE ID=:idArtikla";
$oStatement = $oConnection->prepare($sQuery);
$data->aktivnost = htmlspecialchars(strip_tags($data->aktivnost));
$data->idArtikla = htmlspecialchars(strip_tags($data->idArtikla));

$oStatement->bindParam(":aktivnost",$data->aktivnost,PDO::PARAM_BOOL);
$oStatement->bindParam(":idArtikla", $data->idArtikla);
$oStatement->execute();

echo json_encode("Artikl uspješno vraćen!");
?>