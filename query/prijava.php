<?php
include '../database/connection.php';
include '../classes/Zaposlenik.php';
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/x-www-form-urlencoded');
ini_set('memory_limit', '2048M');
    $data = json_decode(file_get_contents('php://input'));
    if(!empty($data->email) && !empty($data->lozinka))
           {
//             $query = "INSERT INTO ". $this->TableName . " SET Ime=:name, Prezime=:surname, 
//             GodinaRodenja=:birthDate, Spol=:gender, Email=:email, 
//             Mobitel=:mobile, DatumPristupanja=:accessDate";

//     $stmt = $this->conn->prepare($query);

//     $this->Ime = htmlspecialchars(strip_tags($this->Ime));
//     $this->Prezime = htmlspecialchars(strip_tags($this->Prezime));
//     $this->GodinaRodenja = htmlspecialchars(strip_tags($this->GodinaRodenja));
//     $this->Spol = htmlspecialchars(strip_tags($this->Spol));
//     $this->Email = htmlspecialchars(strip_tags($this->Email));
//     $this->Mobitel = htmlspecialchars(strip_tags($this->Mobitel));
//     $this->DatumPristupanja = htmlspecialchars(strip_tags($this->DatumPristupanja));

//     $stmt->bindParam(":name", $this->Ime);
//     $stmt->bindParam(":surname", $this->Prezime);
//     $stmt->bindParam(":birthDate", $this->GodinaRodenja);
//     $stmt->bindParam(":gender", $this->Spol);
//     $stmt->bindParam(":email", $this->Email);
//     $stmt->bindParam(":mobile", $this->Mobitel);
//     $stmt->bindParam(":accessDate", $this->DatumPristupanja);


// //        var_dump($stmt->errorInfo());

//    

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