<?php
abstract class Osoba{
    public $m_nOib;
    public $m_sIme;
    public $m_sPrezime;
    public $m_sSpol;
    public $m_nDatumRodjenja;

    public function __construct($oib,$ime,$prezime,$spol,$datumRodjenja){
       $this->m_nOib=$oib;
       $this->m_sIme=$ime;
       $this->m_sPrezime=$prezime;
       $this->m_sSpol=$spol;
       $this->m_nDatumRodjenja=$datumRodjenja;
    }
}
?>