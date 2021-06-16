<?php
// include "../path_helper.php";
// include (ROOT ."\\classes\\Artikl.php");
include './Artikl.php';
class Stavka extends Artikl{
    public $m_nIdStavke;
    public $m_fUkCijena;
    public $m_nKolicina;

    public function __construct($idStavke,$ukCijena,$kolicina,$id,$naziv,$opis,$jmj,$jedCijena,$kvantiteta,$potkategorija){
        $this->m_nIdStavke=$idStavke;
        $this->m_fUkCijena=$ukCijena;
        $this->m_nKolicina=$kolicina;
        parent::__construct($id,$naziv,$opis,$jmj,$jedCijena,$kvantiteta,$potkategorija);
    }
}
?>