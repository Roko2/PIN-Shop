<?php
include '../database/connection.php';
include '../classes/Artikl.php';
header('Content-Type: text/html; charset=utf-8');
ini_set('memory_limit', '2048M');
$data=json_decode(file_get_contents('php://input'));
$sQuery = "DELETE FROM artikl WHERE ID=:id";
$oStatement = $oConnection->prepare($sQuery);

$data->m_nIdArtikla = htmlspecialchars(strip_tags($data->m_nIdArtikla));

$oStatement->bindParam(":id", $data->m_nIdArtikla);

$oStatement->execute();
?>