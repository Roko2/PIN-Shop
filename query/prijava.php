<?php
include '../database/connection.php';
include '../classes/Zaposlenik.php';
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/x-www-form-urlencoded');
ini_set('memory_limit', '2048M');
$data = json_decode(file_get_contents('php://input'));
if(!empty($data->email) && !empty($data->lozinka))
        {  
        $sQuery = 'SELECT * FROM zaposlenik WHERE Email=:email';
        $oStatement = $oConnection->prepare($sQuery);
        $oStatement->bindParam(":email", $data->email);
        $oStatement->execute();
        $oRow = $oStatement->fetch(PDO::FETCH_BOTH); 
        if (!empty($oRow['Email']) && password_verify($data->lozinka,$oRow['Lozinka']))
            {
                $oZaposlenik=array('email'=>$oRow['Email'],'kljuc'=>$oRow['TajniKljuc']);
                echo(json_encode($oZaposlenik));
            }
        else
            {
                echo null;
            }
        }
?>