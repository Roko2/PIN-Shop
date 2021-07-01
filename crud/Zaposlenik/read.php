<?php
include '../../database/connection.php';
include '../../classes/Zaposlenik.php';
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/json');
ini_set('memory_limit', '2048M');
$data=json_decode(file_get_contents('php://input'));
$vZaposlenici=array();
$sQuery="SELECT * FROM zaposlenik WHERE StatusZap=1";
$oRecord = $oConnection->query($sQuery);
while($oRow = $oRecord->fetch(PDO::FETCH_BOTH))
{
$oZaposlenik=new Zaposlenik($oRow['Email'],$oRow['Uloga'],$oRow['Placa'],$oRow['GodinaStaza'],$oRow['Lozinka'],$oRow['TajniKljuc'],$oRow['StatusZap'],$oRow['OIB'],$oRow['Ime'],$oRow['Prezime'],$oRow['Spol'],$oRow['DatumRodjenja']);
array_push($vZaposlenici,$oZaposlenik);
}
echo(json_encode($vZaposlenici));
?>