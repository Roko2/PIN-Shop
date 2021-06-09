<?php 
include '../database/connection.php';
include '../classes/Artikl.php';
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/json');
ini_set('memory_limit', '2048M');
$data=json_decode(file_get_contents('php://input'));
$sQuery = "UPDATE artikl SET Naziv=:naziv, Opis=:opis, Jmj=:jmj, JdCijena=:jdCijena, IdPotkategorije=:potkategorija WHERE ID=:idArtikla";
$oStatement = $oConnection->prepare($sQuery);

$data->m_nIdArtikla = htmlspecialchars(strip_tags($data->m_nIdArtikla));
$data->m_sNazivArtikla = htmlspecialchars(strip_tags($data->m_sNazivArtikla));
$data->m_sOpisArtikla = htmlspecialchars(strip_tags($data->m_sOpisArtikla));
$data->m_sJmjArtikla = htmlspecialchars(strip_tags($data->m_sJmjArtikla));
$data->m_fJdCijenaArtikla = htmlspecialchars(strip_tags($data->m_fJdCijenaArtikla));
$data->m_nIdPotkategorijaArtikla = htmlspecialchars(strip_tags($data->m_nIdPotkategorijaArtikla));

$oStatement->bindParam(":idArtikla", $data->m_nIdArtikla);
$oStatement->bindParam(":naziv", $data->m_sNazivArtikla);
$oStatement->bindParam(":opis", $data->m_sOpisArtikla);
$oStatement->bindParam(":jmj", $data->m_sJmjArtikla);
$oStatement->bindParam(":jdCijena", $data->m_fJdCijenaArtikla);
$oStatement->bindParam(":potkategorija", $data->m_nIdPotkategorijaArtikla);

$oStatement->execute();
?>