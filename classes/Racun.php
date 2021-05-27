<?php
class Racun{
    public $m_nSifraRacuna;
    public $m_nOibZaposlenika;
    public $m_fUkupanIznos;
    public $m_sDatum;
    public $m_vStavke=array();

    public function __construct($sifra,$oibZaposlenik,$ukIznos,$datum,$stavke){
        $this->m_nSifraRacuna=$sifra;
        $this->m_nOibZaposlenika=$oibZaposlenik;
        $this->m_fUkupanIznos=$ukIznos;
        $this->m_sDatum=$datum;
        $this->m_vStave=(array)$stavke;
    }
}
?>