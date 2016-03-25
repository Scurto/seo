<?php
/**
 * Created by IntelliJ IDEA.
 * User: yustymenko
 * Date: 27.01.2016
 * Time: 17:26
 */
function gclid_decode($gclid, $splitTimestamp = true)
{
    // Copyright 2013 Deed Poll Office Ltd, UK <https://deedpolloffice.com>
    // Licensed under Apache Licence v2.0 <http://apache.org/licenses/LICENSE-2.0>
    preg_match_all('/
        (?=[\x5\xd\x15\x1d%\-5=EMU\]emu}\x85\x8d\x95\x9d\xa5\xad\xb5\xbd\xc5\xcd\xd5
	    \xdd\xe5\xed\xf5\xfd]) # 32-bit wire type
        ([\x80-\xff]*[\0-\x7f])(.{4}) |
        ([\x80-\xff]*[\0-\x7f])([\x80-\xff]*[\0-\x7f]) # default to varint wire type
        /sx',
        base64_decode(str_replace(array('_','-'), array('+','/'), $gclid)),
        $matches,
        PREG_SET_ORDER);
    $ret = array();
    foreach ($matches as $m) {
        $key = $val = 0;
        foreach (str_split($m[1] ? $m[1] : $m[3]) as $i => $c)
            $key += (ord($c) & 0x7f) << $i * 7;
        if ($m[1]) { // 32-bit (probably) unsigned int (not supported by PHP)
            foreach (str_split($m[2]) as $i => $c) {
                $val = PHP_INT_SIZE < 5 && function_exists('bcadd') ?
                    bcadd($val, bcmul(ord($c), bcpow(2, $i * 8))) :
                    $val + (ord($c) * pow(2, $i * 8));
            }
        } else {
            foreach (str_split($m[4]) as $i => $c) {
                $val = PHP_INT_SIZE < 8 && function_exists('bcadd') ?
                    bcadd($val, bcmul(ord($c) & 0x7f, bcpow(2, $i * 7))) :
                    $val + ((ord($c) & 0x7f) * pow(2, $i * 7));
            }
        }
        $ret[$key >> 3] = $val;
    }
    if ($splitTimestamp) $ret[1] = array( // Split into seconds / microseconds
        (int) floor($ret[1] / 1000000),
        is_int($ret[1]) ? $ret[1] % 1000000 :
            (is_string($ret[1]) ? bcmod($ret[1], 1000000) : null),
    );
    return $ret;
}
print_r(gclid_decode('CKSDxc_qhLkCFQyk4AodO24Arg'));
$mil = 1227643821310;
$seconds = $mil / 1000;
echo date("d/m/Y H:i:s", $seconds);
//echo date("H:i:s", 1376737438);
?>