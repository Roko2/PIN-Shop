<?php
include 'Osoba.php';
class Zaposlenik extends Osoba{
    public $m_sEmail;
    public $m_sUloga;
    public $m_fPlaca;
    public $m_nGodinaStaza;
    public $m_sLozinka;

    public function __construct($email,$uloga,$placa,$godinaStaza,$lozinka,Osoba $objekt){
        $this->m_sEmail=$email;
        $this->m_sUloga=$uloga;
        $this->m_fPlaca=$placa;
        $this->m_nGodinaStaza=$godinaStaza;
        $this->m_sLozinka=$lozinka;
        parent::__construct($objekt->m_nOib,$objekt->m_sIme,$objekt->m_sPrezime,$objekt->m_nDatumRodjenja);
    }
}
?>