<?php
    require_once "../chapters-class/chapter.php";
    session_start(); // Start the session

    if (isset($_GET['answer'])) {
        if ($_GET['answer'] == "Sí señora" || $_GET['answer'] == "Sí" || $_GET['answer'] == "Lamentablemente..." || $_GET['answer'] == "Sep" || $_GET['answer'] == "Sa" || $_GET['answer'] == "WOW" || $_GET['answer'] == "ZARPADO" || $_GET['answer'] == "INCREÍBLE" || $_GET['answer'] == "FAAAA" || $_GET['answer'] == "TREMENDO!") {
        $isIntro = true;
        }
    }

    $needsHelp = false;
    if (isset($_GET['answer'])) {
        if ($_GET['answer'] == $_SESSION["rightAnswer"] || $isIntro) {
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
    $dialogue = $chapter->getDialogue();
    $character = $chapter->getCharacter();
    $characterName = $chapter->getCharacterName();
    $background = $chapter->getBackground();
    $elements = array($character, $characterName, $dialogue, $background);
    if($needsHelp) {
        $help = $chapter->getHelp();
    } else {
        $help = false;
    }
    $answers = $chapter->getAnswers();

    if (count($answers) > 0) {
        array_push($elements, $help, $answers);
    }

    echo json_encode($elements);
?>