<?php
 session_start();
include "../../database/connection.php";
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/json');
ini_set('memory_limit', '2048M');
$data=json_decode(file_get_contents('php://input'));
date_default_timezone_set('Europe/Belgrade');
$email=$_SESSION['zaposlenik'];
$datum=date("j.n.Y. H:i");
$ukupnaCijenaRacuna=0;
//---------------------------------Dodavanje računa u tablicu račun-----------------------------------------------
$sQuery = "INSERT INTO racun SET ZaposlenikEmail=:zaposlenikEmail, UkIznos=:ukupnaCijena, Datum=:datumIzrade,Popust=:popust";
$oStatement = $oConnection->prepare($sQuery);
foreach ($data->stavke as $key =>$value) {
    $ukupnaCijenaRacuna+=(float)$value->ukupnaCijena;
  }
$ukupnaCijenaRacuna=$ukupnaCijenaRacuna-(($ukupnaCijenaRacuna*(float)($data->popust) )/100);
$ukupnaCijenaRacuna = htmlspecialchars(strip_tags($ukupnaCijenaRacuna));
$email = htmlspecialchars(strip_tags($email));
$datum = htmlspecialchars(strip_tags($datum));
$data->popust = htmlspecialchars(strip_tags($data->popust));

$oStatement->bindParam(":zaposlenikEmail",$email);
$oStatement->bindParam(":ukupnaCijena", $ukupnaCijenaRacuna);
$oStatement->bindParam(":datumIzrade", $datum);
$oStatement->bindParam(":popust", $data->popust);
$oStatement->execute();

// //--------------------------------------------Dodavanje stavke u tablicu stavka-----------------------------------------------
$sQuery2="INSERT INTO stavka SET Kolicina=:kolicinaStavke,UkCijena=:ukupnaCijenaStavke,IdArtikla=:artiklID,IdRacuna=(SELECT Sifra FROM racun ORDER BY Sifra DESC LIMIT 1)";
foreach($data->stavke as $key2=>$val){
$oStatement2=$oConnection->prepare($sQuery2);

$val->odabranaKolicina = htmlspecialchars(strip_tags($val->odabranaKolicina));
$val->ukupnaCijena = htmlspecialchars(strip_tags($val->ukupnaCijena));
$val->m_nIdArtikla = htmlspecialchars(strip_tags($val->m_nIdArtikla));

$oStatement2->bindParam(":kolicinaStavke",$val->odabranaKolicina);
$oStatement2->bindParam(":ukupnaCijenaStavke", $val->ukupnaCijena);
$oStatement2->bindParam(":artiklID", $val->m_nIdArtikla);

$oStatement2->execute();
}

//------------------------------------------Oduzimanje kvanitete artikla u bazi-----------------------------------------------------------------
$sQuery4="UPDATE artikl SET Kvantiteta = Kvantiteta - (SELECT DISTINCT Kolicina FROM stavka WHERE stavka.IdArtikla=:ArtiklID) WHERE artikl.ID=:ArtiklID";
foreach($data->stavke as $key4=>$vrijednost){
  $oStatement4=$oConnection->prepare($sQuery4);
  $vrijednost->m_nIdArtikla=htmlspecialchars(strip_tags($vrijednost->m_nIdArtikla));
  $oStatement4->bindParam(":ArtiklID",$vrijednost->m_nIdArtikla);
  $oStatement4->execute();
}
echo json_encode(array("poruka"=>"Račun uspješno izrađen"));
?>