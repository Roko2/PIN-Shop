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
    public $m_nIdArtikla;
    public $m_sNazivArtikla;
    public $m_sOpisArtikla;
    public $m_sJmjArtikla;
    public $m_fJdCijenaArtikla;
    public $m_nIdPotkategorijaArtikla;

    public function __construct($id,$naziv,$opis,$jmj,$jedCijena,$potkategorija){
        $this->m_nIdArtikla=$id;
        $this->m_sNazivArtikla=$naziv;
        $this->m_sJmjArtikla=$jmj;
        $this->m_fJdCijenaArtikla=$jedCijena;
        $this->m_nIdPotkategorije=$potkategorija;
    }
}

class Stavka extends Artikl{
    public $m_nIdStavke;
    public $m_fUkCijena;
    public $m_nKolicina;

    public function __construct($id,$ukCijena,$kolicina){
        $this->m_nIdStavke=$id;
        $this->m_fUkCijena=$ukCijena;
        $this->m_nKolicina=$kolicina;
    }
}

class Racun{
    public $m_nSifraRacuna;
    public $m_nOibZaposlenika;
    public $m_fUkupanIznos;
    public $m_sDatum;
    public $m_vStavke=array();

    public function __construct($sifra,$oibZaposlenik,$ukIznos,$datum,$stavke){
        $this->m_nSifraRacuna=$sifra;
        $this->m_nOibZaposlenika=$oibZaposlenik;
        $this->m_fUkupanIznos=$ukIznos;
        $this->m_sDatum=$datum;
        $this->m_vStave=(array)$stavke;
    }
}

abstract class Osoba{
    public $m_nOib;
    public $m_sIme;
    public $m_sPrezime;
    public $m_nDatumRodjenja;

    public function __construct($oib,$ime,$prezime,$datumRodjenja){
       $this->m_nOib=$oib;
       $this->m_sIme=$ime;
       $this->m_sPrezime=$prezime;
       $this->m_nDatumRodjenja=$datumRodjenja;
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