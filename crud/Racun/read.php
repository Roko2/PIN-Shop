<?php
session_start();
include '../../database/connection.php';
include '../../classes/Racun.php';
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/json');
ini_set('memory_limit', '2048M');
      $sQuery="SELECT * FROM racun";
      $oRecord = $oConnection->query($sQuery);
      $vRacuni=array();
      while($oRow = $oRecord->fetch(PDO::FETCH_BOTH))
      {
          if($oRow['ZaposlenikEmail']==$_SESSION['zaposlenik']){
          $oRacun=new Racun($oRow['Sifra'],$oRow['ZaposlenikEmail'],$oRow['UkIznos'],$oRow['Datum'],$oRow['Popust']);
          array_push($vRacuni,$oRacun);
          }
      }
    echo(json_encode($vRacuni));
?>