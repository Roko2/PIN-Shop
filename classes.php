<?php
class Configuration{
    public $host='localhost'; 
    public $dbname='pcwebshop'; 
    public $username='root'; 
    public $password=''; 
}
class Kategorija{
    public $m_nId;
    public $m_sNaziv;

    public function __construct($id,$naziv){
        $this->m_nId=$id;
        $this->m_sNaziv=$naziv;
    }
}

class Artikl{

}

class Stavka{

}

class Osoba{

}

abstract class Zaposlenik{

}
?>