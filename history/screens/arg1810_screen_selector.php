<?php
    function getScreenElements($chapterCode, $screenNum){
        switch($chapterCode){
            case "arg1810":
                switch($screenNum){
                    case 01:
                        $isQuestion = false;
                        $character = "hombre01.png";
                        $dialogue = "Hola! Lo estábamos esperando! Mi nombre es Nicolás Rodríguez Peña";
                        $background = "Casa_de_Pena.jpg";
                    break;
                    case 02:
                        $isQuestion = false;
                        $character = "hombre01.png";
                        $dialogue = "Me dijeron que iba a venir a nuestra reunión. Sólo para estar seguro que usted es quien dice ser...";
                        $background = "Casa_de_Pena.jpg";
                    break;
                    case 03:
                        $isQuestion = true;
                        $character = "hombre01.png";
                        $dialogue = "¿Me podría nombrar a 3 integrantes de la reunión de hoy?";
                        $background = "Casa_de_Pena.jpg";
                        $rightOption = "Castelli, Belgrano y Paso";
                        $falseOption1 = "Melchor, Gaspar y Baltazar";
                        $falseOption2 = "Mou, Larry, Curly";
                        $falseOption3 = "Rick, Morty, Summer";
                        $falseOption4 = "Francella, Maradona, Ricky Fort";
                    break;
                    default:
                        //code to be executed if n is different from all labels;
                }
                $elements = array($isQuestion, $character, $dialogue, $background);
                if ($isQuestion) {
                    array_push($elements, $rightOption, $falseOption1, $falseOption2, $falseOption3, $falseOption4);
                }
            break;
        }
        return ($elements);
    }
?>