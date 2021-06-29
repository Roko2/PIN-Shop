<?php
include $_SERVER['DOCUMENT_ROOT']."/PIN-Shop/classes/Artikl.php";
class Stavka extends Artikl{
    public $m_nIdStavke;
    public $m_fUkCijena;
    public $m_nKolicina;

    public function __construct($idStavke,$ukCijena,$kolicina,$id,$naziv,$opis,$jmj,$jedCijena,$kvantiteta,$potkategorija,$aktivnost){
        $this->m_nIdStavke=$idStavke;
        $this->m_fUkCijena=$ukCijena;
        $this->m_nKolicina=$kolicina;
        parent::__construct($id,$naziv,$opis,$jmj,$jedCijena,$kvantiteta,$potkategorija,$aktivnost);
    }
}
?>