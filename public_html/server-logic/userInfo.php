<?php
include_once "../history/screens/objects.php";
session_start();

    if (isset($_POST['name'])) {
        $_SESSION["username"] = $_POST['name'];
    } else {
        $username = isset($_SESSION["username"]) ? $_SESSION["username"] : "";
        $elements = getElements($_SESSION["chapterName"]);
        unset($_SESSION["chapterName"]);
        unset($_SESSION["currentScreen"]);
        unset($_SESSION["rightAnswer"]);

        $resources = array($username, $elements[0], $elements[1], $elements[2]);
        echo json_encode($resources);
    }
?>