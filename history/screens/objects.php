<?php
function getObject($eraCode){
    switch($eraCode){
        case 1810: $object = "escarapela.png" $text="Completaste la historia del hombre político. Completa la historia como pueblo para conseguir más partes de la escarapela"; break;
        default: $object = "book.png";
    }
    return ($object);
}
?>