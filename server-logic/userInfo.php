<?php
include_once "objects.php";
session_start();

    if (!is_null($_POST['name'])) {
        $_SESSION["username"] = $_POST['name'];
    } else {
        $username = $_SESSION["username"];
        $era = $_SESSION["chapterName"];
        $object = getObject($era);
        unset($_SESSION["chapterName"]);
        unset($_SESSION["currentScreen"]);

        $elements = array($username, $era, $object[0], $object[1]);
        echo json_encode($elements);
    }
?>