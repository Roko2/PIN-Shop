<?php
include '../database/connection.php';
include '../classes/Zaposlenik.php';
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/json');
ini_set('memory_limit', '2048M');
$data=json_decode(file_get_contents('php://input'));
$sQuery="SELECT * FROM zaposlenik WHERE Email=:email";
$oStatement = $oConnection->prepare($sQuery);
$oStatement->bindParam(':email',$data->email);
$oStatement->execute();
$oRow = $oStatement->fetch(PDO::FETCH_ASSOC);      
$oZaposlenik=new Zaposlenik($oRow['Email'],$oRow['Uloga'],$oRow['Placa'],$oRow['GodinaStaza'],$oRow['Lozinka'],$oRow['TajniKljuc'],$oRow['OIB'],$oRow['Ime'],$oRow['Prezime'],$oRow['Spol'],$oRow['DatumRodjenja']);
echo(json_encode($oZaposlenik));
?>