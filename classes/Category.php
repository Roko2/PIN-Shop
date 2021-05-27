<?php
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
?>