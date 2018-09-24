<?php
function getElements($eraCode){
    switch($eraCode){
        case "arg1810": $eraAndObject = "Escarapela de 1810"; $object = "escarapela"; $text="Completaste la revolución de mayo de 1810 como hombre político. Completa la historia como pueblo para conseguir más partes de la escarapela"; break;
        default: $eraAndObject = "Objeto de tu capítulo"; $object = "book.png"; $text="¡Felicitaciones! ¡Completaste el capítulo!";
    }
    $elements = array($eraAndObject, $object, $text);
    return ($elements);
}
?>