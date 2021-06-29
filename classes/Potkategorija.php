<?php
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
?>