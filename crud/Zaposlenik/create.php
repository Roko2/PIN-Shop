<?php
include "../../database/connection.php";
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/json');
ini_set('memory_limit', '2048M');
$data=json_decode(file_get_contents('php://input'));
$sQuery = "INSERT INTO  zaposlenik SET Ime=:ime, Prezime=:prezime,DatumRodjenja=:datumRodjenja, Email=:email, OIB=:oib,Spol=:spol,Lozinka=:lozinka, Placa=:placa,Uloga=:uloga,GodinaStaza=:godinaStaza,TajniKljuc=:tajniKljuc,StatusZap=:statusZap";
$oStatement = $oConnection->prepare($sQuery);
$tajniKljuc=md5(uniqid(rand(), true));
$datumRodjenja=date("Y-m-d",strtotime($data->datumRodjenjaZaposlenika));
$lozinka=password_hash($data->lozinkaZaposlenika,PASSWORD_DEFAULT);
$data->imeZaposlenika = htmlspecialchars(strip_tags($data->imeZaposlenika));
$data->prezimeZaposlenika = htmlspecialchars(strip_tags($data->prezimeZaposlenika));
$datumRodjenja = htmlspecialchars(strip_tags($datumRodjenja));
$data->emailZaposlenika = htmlspecialchars(strip_tags($data->emailZaposlenika));
$data->oibZaposlenika = htmlspecialchars(strip_tags($data->oibZaposlenika));
$data->dodavanjeSpolZaposlenik = htmlspecialchars(strip_tags($data->dodavanjeSpolZaposlenik));
$lozinka = htmlspecialchars(strip_tags($lozinka));
$data->placaZaposlenika = htmlspecialchars(strip_tags($data->placaZaposlenika));
$data->ulogaZaposlenika = htmlspecialchars(strip_tags($data->ulogaZaposlenika));
$data->godinaStazaZaposlenika = htmlspecialchars(strip_tags($data->godinaStazaZaposlenika));
$data->statusZaposlenika = htmlspecialchars(strip_tags($data->statusZaposlenika));
$tajniKljuc = htmlspecialchars(strip_tags($tajniKljuc));

$oStatement->bindParam(":ime", $data->imeZaposlenika);
$oStatement->bindParam(":prezime", $data->prezimeZaposlenika);
$oStatement->bindParam(":datumRodjenja", $datumRodjenja);
$oStatement->bindParam(":email", $data->emailZaposlenika);
$oStatement->bindParam(":oib", $data->oibZaposlenika);
$oStatement->bindParam(":spol", $data->dodavanjeSpolZaposlenik);
$oStatement->bindParam(":lozinka", $lozinka);
$oStatement->bindParam(":placa", $data->placaZaposlenika);
$oStatement->bindParam(":uloga", $data->ulogaZaposlenika);
$oStatement->bindParam(":godinaStaza", $data->godinaStazaZaposlenika);
$oStatement->bindParam(":statusZap", $data->statusZaposlenika,PDO::PARAM_BOOL);
$oStatement->bindParam(":tajniKljuc", $tajniKljuc);
$oStatement->execute();

echo json_encode("Zaposlenik uspješno zaposlen!");
?>