<?php
class Configuration{
    public $host='localhost'; 
    public $dbname='pcwebshop'; 
    public $username='root'; 
    public $password=''; 
}

class Category{
    public $m_nIdCategory;
    public $m_sNazivCategory;
    public $m_oPotkategorije=array();

    public function __construct($id,$naziv,$potkategorije){
        $this->m_nIdCategory=$id;
        $this->m_sNazivCategory=$naziv;
        $this->m_oPotkategorije=(array)$potkategorije;
    }
}

class podKategorija{
    public $m_nId;
    public $m_sNaziv;
    public $m_nParentCategoryId;

    public function __construct($id,$naziv,$parentCatId){
        $this->m_nId=$id;
        $this->m_sNaziv=$naziv;
        $this->m_nParentCategoryId=$parentCatId;
    }
}

class Artikl{

}

class Stavka{

}

abstract class Osoba{
    public $m_nOib="";
    public $m_sIme="";
    public $m_sPrezime="";
    public $m_nDatumRodjenja="";

    public function __construct($oib=null,$ime=null,$prezime=null,$datumRodjenja=null){
       if($oib) $this->m_nOib=$oib;
       if($ime) $this->m_sIme=$ime;
       if($prezime)  $this->m_sPrezime=$prezime;
       if($datumRodjenja) $this->m_nDatumRodjenja=$datumRodjenja;
    }
    // public function ProvjeriOib($m_nOib){
    //     if ( mb_strlen( $m_nOib ) != 11 || ( ! is_numeric( $m_nOib ) ) ) {
    //         return false;
    //     }
    //     $ostatak = 10;
    //     for ( $i = 0; $i < 10; $i++ ) {
    //         $trenutnaZnamenka = (int) $m_nOib[$i];
    //         $zbroj = $trenutnaZnamenka + $ostatak;
    //         $meduOstatak = $zbroj % 10;
    //          if ( $meduOstatak == 0) {
    //             $meduOstatak = 10;
    //          }
    //          $umnozak = $meduOstatak * 2;
    //          $ostatak = $umnozak % 11;
    //         }
    //         if ( $ostatak == 1 ) {
    //             $kontrolnaZnamenka = 0;
    //          }
    //          else {
    //             $kontrolnaZnamenka = 11 - $ostatak;
    //          }
    //          if ( ( (int) $m_nOib[10] ) == $kontrolnaZnamenka ) {
    //             return true;
    //          }
    // return false;  
    // }
}

class Zaposlenik extends Osoba{
    public $m_sEmail;
    public $m_sUloga;
    public $m_fPlaca;
    public $m_nGodinaStaza;
    public $m_sLozinka;

    public function __construct($email,$uloga,$placa,$godinaStaza,$lozinka){
        $this->m_sEmail=$email;
        $this->m_sUloga=$uloga;
        $this->m_fPlaca=$placa;
        $this->m_nGodinaStaza=$godinaStaza;
        $this->m_sLozinka=$lozinka;
    }
}
?>