<?php
include '../database/connection.php';
include '../classes/Artikl.php';
// include "../path_helper.php";
// include (ROOT ."\\database\\connection.php");
// include (ROOT ."\\classes\\Artikl.php");
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/json');
ini_set('memory_limit', '2048M');
      $sQuery="SELECT ID,Naziv,Opis,Jmj,Kvantiteta,JdCijena,NazivPotkategorije FROM artikl LEFT JOIN potkategorije on artikl.IdPotkategorije=potkategorije.IDpotkategorije";
      $oRecord = $oConnection->query($sQuery);
      $vArtikli=array();
      while($oRow = $oRecord->fetch(PDO::FETCH_BOTH))
      {
          $oArtikl=new Artikl($oRow['ID'],$oRow['Naziv'],$oRow['Opis'],$oRow['Jmj'],$oRow['JdCijena'],$oRow['Kvantiteta'],$oRow['NazivPotkategorije']);
          array_push($vArtikli,$oArtikl);
      }
    echo(json_encode($vArtikli));
?>