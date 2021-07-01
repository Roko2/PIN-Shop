<?php 
include "../../database/connection.php";
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/json');
ini_set('memory_limit', '2048M');
$data=json_decode(file_get_contents('php://input'));
$sQuery = "UPDATE zaposlenik SET Ime=:ime, Prezime=:prezime, Placa=:placa,Uloga=:uloga, GodinaStaza=:godinaStaza WHERE Email=:email";
$oStatement = $oConnection->prepare($sQuery);
$data->emailZaposlenika = htmlspecialchars(strip_tags($data->emailZaposlenika));
$data->imeZaposlenika = htmlspecialchars(strip_tags($data->imeZaposlenika));
$data->prezimeZaposlenika = htmlspecialchars(strip_tags($data->prezimeZaposlenika));
$data->placaZaposlenika = htmlspecialchars(strip_tags($data->placaZaposlenika));
$data->ulogaZaposlenika = htmlspecialchars(strip_tags($data->ulogaZaposlenika));
$data->godinaStazaZaposlenika = htmlspecialchars(strip_tags($data->godinaStazaZaposlenika));

$oStatement->bindParam(":email", $data->emailZaposlenika);
$oStatement->bindParam(":ime", $data->imeZaposlenika);
$oStatement->bindParam(":prezime", $data->prezimeZaposlenika);
$oStatement->bindParam(":placa", $data->placaZaposlenika);
$oStatement->bindParam(":uloga", $data->ulogaZaposlenika);
$oStatement->bindParam(":godinaStaza", $data->godinaStazaZaposlenika);
$oStatement->execute();

echo json_encode("Zaposlenik uspješno ažuriran!");
?>