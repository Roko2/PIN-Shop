<?php
abstract class Osoba{
    public $m_nOib;
    public $m_sIme;
    public $m_sPrezime;
    public $m_nDatumRodjenja;

    public function __construct($oib,$ime,$prezime,$datumRodjenja){
       $this->m_nOib=$oib;
       $this->m_sIme=$ime;
       $this->m_sPrezime=$prezime;
       $this->m_nDatumRodjenja=$datumRodjenja;
    }
    public function ProvjeriOib($m_nOib){
        if ( mb_strlen( $m_nOib ) != 11 || ( ! is_numeric( $m_nOib ) ) ) {
            return false;
        }
        $ostatak = 10;
        for ( $i = 0; $i < 10; $i++ ) {
            $trenutnaZnamenka = (int) $m_nOib[$i];
            $zbroj = $trenutnaZnamenka + $ostatak;
            $meduOstatak = $zbroj % 10;
             if ( $meduOstatak == 0) {
                $meduOstatak = 10;
             }
             $umnozak = $meduOstatak * 2;
             $ostatak = $umnozak % 11;
            }
            if ( $ostatak == 1 ) {
                $kontrolnaZnamenka = 0;
             }
             else {
                $kontrolnaZnamenka = 11 - $ostatak;
             }
             if ( ( (int) $m_nOib[10] ) == $kontrolnaZnamenka ) {
                return true;
             }
    return false;  
    }
}
?>