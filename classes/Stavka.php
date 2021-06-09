<?php
// include "../path_helper.php";
// include (ROOT ."\\classes\\Artikl.php");
include './Artikl.php';
class Stavka extends Artikl{
    public $m_nIdStavke;
    public $m_fUkCijena;
    public $m_nKolicina;
    public $m_nIdArtikla;

    public function __construct($id,$ukCijena,$kolicina,$idArtikl){
        $this->m_nIdStavke=$id;
        $this->m_fUkCijena=$ukCijena;
        $this->m_nKolicina=$kolicina;
        $this->m_nIdArtikla=$idArtikl;
    }
}
?>