<?php
include '../classes/Configuration.php';
$oVeza=new Configuration();
try
{
 $oConnection = new PDO("mysql:host=$oVeza->host;dbname=$oVeza->dbname", $oVeza->username, $oVeza->password);
 $oConnection->exec("set names utf8mb4");
}
catch (PDOException $pe)
{
 die("Could not connect to the database $oVeza->dbname :" . $pe->getMessage());
}

?>