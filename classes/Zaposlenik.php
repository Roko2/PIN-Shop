<?php
// include "../path_helper.php";
// include (ROOT ."\\classes\\Osoba.php");
include 'Osoba.php';
class Zaposlenik extends Osoba{
    public $m_sEmail;
    public $m_sUloga;
    public $m_fPlaca;
    public $m_nGodinaStaza;
    public $m_sLozinka;
    public $m_sTajniKljuc;

    public function __construct($email,$uloga,$placa,$godinaStaza,$lozinka,$tajniKljuc,$oib,$ime,$prezime,$spol,$datumRodjenja){
        $this->m_sEmail=$email;
        $this->m_sUloga=$uloga;
        $this->m_fPlaca=$placa;
        $this->m_nGodinaStaza=$godinaStaza;
        $this->m_sLozinka=$lozinka;
        $this->m_sTajniKljuc=$tajniKljuc;
        parent::__construct($oib,$ime,$prezime,$spol,$datumRodjenja);
    }
}
?>