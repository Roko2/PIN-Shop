<?php
include '../database/connection.php';
include '../classes/Category.php';
include '../classes/SubCategory.php';
header('Content-Type: text/html; charset=utf-8');
ini_set('memory_limit', '2048M');
    $sQuery2="SELECT * FROM potkategorije";
    $oRecord2 = $oConnection->query($sQuery2);
    $potKategorije=array();
    while($oRow2 = $oRecord2->fetch(PDO::FETCH_BOTH))
    {
        $potkategorija=new podKategorija($oRow2['IDPotkategorije'],$oRow2['NazivPotkategorije'],$oRow2['KategorijaID']);
        array_push($potKategorije,$potkategorija);
    }
       
ini_set('memory_limit', '2048M');
    $sQuery="SELECT * FROM kategorija";
    $oRecord = $oConnection->query($sQuery);
    $Kategorije=array();
    $poljePotkategorija=array();
    while($oRow = $oRecord->fetch(PDO::FETCH_BOTH))
    {
        foreach($potKategorije as $x=>$val){
            if($oRow['Id']==$val->m_nParentCategoryId){
                array_push($poljePotkategorija,$val);
            }
        }
        $kategorija=new Category($oRow['Id'],$oRow['parentNaziv'],$poljePotkategorija);
        array_push($Kategorije,$kategorija);
        $poljePotkategorija=array();
    }
    echo(json_encode($Kategorije));
 ?>
