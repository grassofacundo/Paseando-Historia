<?php
    require_once "../chapters-class/chapter.php";

    $arg1810 = new chapter($_GET['name'], $_GET['currentScreen']);
    $dialogue = $arg1810->getDialogue();
    $character = $arg1810->getCharacter();

    $elements = array($character, $dialogue);
    echo json_encode($elements);
?>