<?php
    function getScreenElements($chapterCode, $screenNum){
        switch($chapterCode){
            case "arg1810":
                switch($screenNum){
                    case 01:
                        $character = "hombre01.png";
                        $dialogue = "Hola! Lo estábamos esperando! Mi nombre es Nicolás Rodríguez Peña, me dijeron que iba a venir a nuestra reunión. Sólo para estar seguro que usted es quien dice ser ¿Me podría nombrar a 3 integrantes de la reunión de hoy?";
                        $elements = array($character, $dialogue);
                    break;
                    case 02:
                        //code 1o be executed if n=label2;
                        break;
                    case 03:
                        //code to be executed if n=label3;
                        break;
                    default:
                        //code to be executed if n is different from all labels;
                }
            break;
        }
        return ($elements);
    }
?>