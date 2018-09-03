<?php
include "intro.php";
include "arg1810.php";
include "test01.php";

    function getScreenElements($chapterCode, $screenNum){
        switch($chapterCode){
            case "intro":
                $elements = intro($screenNum);
            break;
            case "arg1810":
                $elements = arg1810($screenNum);
            break;
            case "test01":
                $elements = test01($screenNum);
            break;
            default:
                $character = "error.png";
                $characterName = "Raúl 404";
                $dialogue = "Nos quedamos sin diálogos";
                $background = "error404.png";

                $elements = array($screenType = "dialogue", $character, $characterName, $dialogue, $background);
            break;
        }
        return ($elements);
    }
?>