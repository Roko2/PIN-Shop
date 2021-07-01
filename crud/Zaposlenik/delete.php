<?php
include "../../database/connection.php";
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/json');
ini_set('memory_limit', '2048M');
$data=json_decode(file_get_contents('php://input'));
$sQuery = "UPDATE zaposlenik SET StatusZap=:statusZaposlenika WHERE OIB=:oib";
$oStatement = $oConnection->prepare($sQuery);
$data->oibZaposlenika = htmlspecialchars(strip_tags($data->oibZaposlenika));
$data->status = htmlspecialchars(strip_tags($data->status));
$oStatement->bindParam(":oib", $data->oibZaposlenika);
$oStatement->bindParam(":statusZaposlenika", $data->status,PDO::PARAM_BOOL);
$oStatement->execute();

 echo json_encode("Zaposlenik uspješno otpušten!");
?>