<?php
// include "../../path_helper.php";
// include (ROOT."/database/connection.php");
// include (ROOT."/classes/Artikl.php");

include "../../database/connection.php";
include "../../classes/Artikl.php";
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/json');
ini_set('memory_limit', '2048M');
$data=json_decode(file_get_contents('php://input'));
$sQuery = "DELETE FROM artikl WHERE ID=:id";
$oStatement = $oConnection->prepare($sQuery);
$data->idArtikla = htmlspecialchars(strip_tags($data->idArtikla));
$oStatement->bindParam(":id", $data->idArtikla);
$oStatement->execute();

 echo json_encode(array("poruka"=>"Artikl uspješno obrisan!"));
?>