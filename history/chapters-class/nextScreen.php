<?php
    require_once "../chapters-class/chapter.php";
    session_start(); // Start the session

    $needsHelp = false;
    if ($_POST['type'] == "answer") {
        if ($_POST['info'] == $_SESSION["rightAnswer"] || $_SESSION["chapterName"] == "intro") {
            //Aumentar en 1 la screen
            $nextScreen = intval($_SESSION["currentScreen"]) + 1;
            $_SESSION["currentScreen"] = (string)$nextScreen;
        } else {
            $needsHelp = true;
        }
    } else {
        //Aumentar en 1 la screen
        $nextScreen = intval($_SESSION["currentScreen"]) + 1;
        $_SESSION["currentScreen"] = (string)$nextScreen;
    }

    $chapter = new chapter($_SESSION["chapterName"], $_SESSION["currentScreen"]);
    $screenType = $chapter->getScreenType();
    $dialogue = $chapter->getDialogue();
    $character = $chapter->getCharacter();
    $characterName = $chapter->getCharacterName();
    $background = $chapter->getBackground();
    $elements = array($screenType, $character, $characterName, $dialogue, $background);
    $help = ($needsHelp ? $chapter->getHelp() : false);
    $answers = $chapter->getAnswers();

    if (count($answers) > 0) {
        array_push($elements, $help, $answers);
    }

    echo json_encode($elements);
?>