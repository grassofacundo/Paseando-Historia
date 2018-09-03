<?php
    session_start(); // Start the session

    if ($_POST['info'] == "intro" || $_POST['info'] == "arg1810")
    {
        $_SESSION["chapterName"] = $_POST['info'];
        $_SESSION["currentScreen"] = 0;
    }
?>