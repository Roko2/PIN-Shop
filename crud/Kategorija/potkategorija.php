<?php
include '../../database/connection.php';
include '../../classes/Potkategorija.php';
// include "../path_helper.php";
// include (ROOT ."\\database\\connection.php");
// include (ROOT ."\\classes\\Category.php");
// include (ROOT ."\\classes\\SubCategory.php");
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/json');
ini_set('memory_limit', '2048M');
    $sQuery="SELECT * FROM potkategorije";
    $oRecord = $oConnection->query($sQuery);
    $vPotkategorije=array();
    while($oRow = $oRecord->fetch(PDO::FETCH_BOTH))
    {
        $potkategorija=new podKategorija($oRow['IDPotkategorije'],$oRow['NazivPotkategorije'],$oRow['KategorijaID']);
        array_push($vPotkategorije,$potkategorija);
    }
echo json_encode($vPotkategorije);
    ?>