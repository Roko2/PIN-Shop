<?php
include '../database/connection.php';
include '../classes/Zaposlenik.php';
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/x-www-form-urlencoded');
ini_set('memory_limit', '2048M');
        //     $sQuery="SELECT * FROM zaposlenik";
        //    $oRecord = $oConnection->query($sQuery);
        //    $vZaposlenici=array();
        //    while($oRow = $oRecord->fetch(PDO::FETCH_BOTH))
        //    {
        //        $oZaposlenik=new Zaposlenik($oRow['OIB'],$oRow['Ime'],$oRow['Prezime'],$oRow['DatumRodjenja'],$oRow['Email'],$oRow['Placa'],$oRow['Uloga'],$oRow['GodinaStaza'],$oRow['Lozinka']);
        //        array_push($vZaposlenici,$oZaposlenik);
        //    }
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

        $sQuery = 'SELECT * FROM zaposlenik WHERE Email=:email AND Lozinka=:lozinka';
        $oStatement = $oConnection->prepare($sQuery);
        $oStatement->bindParam(":email", $data->email);
        $oStatement->bindParam(":lozinka", $data->lozinka);
        $oStatement->execute();
        $oRow = $oStatement->fetch(PDO::FETCH_BOTH); 
    if (!empty($oRow['Email']) && !empty($oRow['Lozinka']))
    {
        $oOsoba=new Osoba($oRow['OIB'],$oRow['Ime'],$oRow['Prezime'],$oRow['DatumRodjenja']);
        $oZaposlenik=new Zaposlenik($oRow['Email'],$oRow['Uloga'],$oRow['Placa'],$oRow['GodinaStaza'],$oRow['Lozinka'],$oOsoba);
        echo(json_encode($oZaposlenik));
    }
    else
    {
        echo NULL;
    }
}
?>