<?php
    require_once "../chapters-class/chapter.php";
    session_start(); // Start the session

    

    $chapter = new chapter($_SESSION["chapterName"], $_SESSION["currentScreen"]);
    $screenType = $chapter->getScreenType();
    $dialogue = $chapter->getDialogue();
    $character = $chapter->getCharacter();
    $characterName = $chapter->getCharacterName();
    $background = $chapter->getBackground();

    $elements = array($screenType, $character, $characterName, $dialogue, $background);
    echo json_encode($elements);
?>