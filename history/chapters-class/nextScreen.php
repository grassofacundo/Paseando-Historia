<?php
    require_once "../chapters-class/chapter.php";
    session_start(); // Start the session

    //Aumentar en 1 la screen
    $nextScreen = intval($_SESSION["currentScreen"]) + 1;
    $_SESSION["currentScreen"] = (string)$nextScreen;

    $chapter = new chapter($_SESSION["chapterName"], $_SESSION["currentScreen"]);
    $dialogue = $chapter->getDialogue();
    $character = $chapter->getCharacter();
    $background = $chapter->getBackground();
    $elements = array($character, $dialogue, $background);
    $answers = $chapter->getAnswers();

    if (count($answers) > 0) {
        array_push($elements, $answers);
    }

    echo json_encode($elements);
?>