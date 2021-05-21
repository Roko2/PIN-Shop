<?php
include 'connection.php';
header('Content-Type: text/html; charset=utf-8');
ini_set('memory_limit', '2048M');
            $sQuery = "SELECT * FROM kategorija";
            $oRecord = $oConnection->query($sQuery);
            $poljeKategorija=array();
            while($oRow = $oRecord->fetch(PDO::FETCH_BOTH))
            {
                $kategorija=new Kategorija($oRow['ID'],$oRow['Naziv']);
                array_push($poljeKategorija,$kategorija);
            }
           echo json_encode($poljeKategorija);
?>