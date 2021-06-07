<?php 
class Artikl{
    public $m_nIdArtikla;
    public $m_sNazivArtikla;
    public $m_sOpisArtikla;
    public $m_sJmjArtikla;
    public $m_fJdCijenaArtikla;
    public $m_nKvantitetaArtikla;
    public $m_nIdPotkategorijaArtikla;

    public function __construct($id,$naziv,$opis,$jmj,$jedCijena,$kvantiteta,$potkategorija){
        $this->m_nIdArtikla=$id;
        $this->m_sNazivArtikla=$naziv;
        $this->m_sOpisArtikla=$opis;
        $this->m_sJmjArtikla=$jmj;
        $this->m_fJdCijenaArtikla=$jedCijena;
        $this->m_nKvantitetaArtikla=$kvantiteta;
        $this->m_nIdPotkategorijaArtikla=$potkategorija;
    }
}
?>