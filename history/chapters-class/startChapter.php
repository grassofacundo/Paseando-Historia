<?php
    require_once "../chapters-class/chapter.php";
    session_start(); // Start the session

    switch($_GET['name']){
        case "intro":
            $_SESSION["chapterName"] = $_GET['name'];
            $_SESSION["currentScreen"] = 1;
        break;
        case "arg1810":
            $_SESSION["chapterName"] = $_GET['name'];
            $_SESSION["currentScreen"] = 1;
        break;
        default: die(); // Si no existe el capítulo, corta el proceso.
    }

    $chapter = new chapter($_SESSION["chapterName"], $_SESSION["currentScreen"]);
    $dialogue = $chapter->getDialogue();
    $character = $chapter->getCharacter();
    $characterName = $chapter->getCharacterName();
    $background = $chapter->getBackground();

    $elements = array($character, $characterName, $dialogue, $background);
    echo json_encode($elements);
?>