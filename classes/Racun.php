<?php
class Racun{
    public $m_nSifraRacuna;
    public $m_sEmailZaposlenika;
    public $m_fUkupanIznos;
    public $m_sDatum;
    public $m_nPopust;

    public function __construct($sifra,$emailZaposlenika,$ukIznos,$datum,$popust){
        $this->m_nSifraRacuna=$sifra;
        $this->m_sEmailZaposlenika=$emailZaposlenika;
        $this->m_fUkupanIznos=$ukIznos;
        $this->m_sDatum=$datum;
        $this->m_nPopust=$popust;
    }
}
?>