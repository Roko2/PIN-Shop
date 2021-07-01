<?php
include "../../database/connection.php";
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/json');
ini_set('memory_limit', '2048M');
$data=json_decode(file_get_contents('php://input'));
$sQuery = "INSERT INTO  zaposlenik SET Ime=:ime, Prezime=:prezime, Email=:email, OIB=:oib,Spol=:spol,Lozinka=:lozinka, Placa=:placa,Uloga=:uloga,GodinaStaza=:godinaStaza,TajniKljuc=:tajniKljuc,StatusZap=:statusZap";
$oStatement = $oConnection->prepare($sQuery);
$data->nazivArtikla = htmlspecialchars(strip_tags($data->nazivArtikla));
$data->opisArtikla = htmlspecialchars(strip_tags($data->opisArtikla));
$data->jedinicaMjereArtikla = htmlspecialchars(strip_tags($data->jedinicaMjereArtikla));
$data->cijenaArtikla = htmlspecialchars(strip_tags($data->cijenaArtikla));
$data->kolicinaArtikla = htmlspecialchars(strip_tags($data->kolicinaArtikla));
$data->kategorijaArtikla = htmlspecialchars(strip_tags($data->kategorijaArtikla));
$data->nazivArtikla = htmlspecialchars(strip_tags($data->nazivArtikla));
$data->opisArtikla = htmlspecialchars(strip_tags($data->opisArtikla));
$data->jedinicaMjereArtikla = htmlspecialchars(strip_tags($data->jedinicaMjereArtikla));
$data->cijenaArtikla = htmlspecialchars(strip_tags($data->cijenaArtikla));
$data->kolicinaArtikla = htmlspecialchars(strip_tags($data->kolicinaArtikla));

$oStatement->bindParam(":ime", $data->nazivArtikla);
$oStatement->bindParam(":prezime", $data->opisArtikla);
$oStatement->bindParam(":email", $data->jedinicaMjereArtikla);
$oStatement->bindParam(":oib", $data->cijenaArtikla);
$oStatement->bindParam(":spol", $data->kolicinaArtikla);
$oStatement->bindParam(":lozinka", $data->kategorijaArtikla);
$oStatement->bindParam(":placa", $data->nazivArtikla);
$oStatement->bindParam(":uloga", $data->opisArtikla);
$oStatement->bindParam(":godinaStaza", $data->jedinicaMjereArtikla);
$oStatement->bindParam(":tajniKljuc", $data->cijenaArtikla);
$oStatement->bindParam(":statusZap", $data->kolicinaArtikla);
$oStatement->execute();

echo json_encode("Zaposlenik uspješno zaposlen!");
?>