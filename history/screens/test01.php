<?php
function test01($screenNum){
    switch((int)$screenNum){
        case 1:
            $screenType = "dialogue";
            $character = "random-guy.jpg";
            $characterName = "Random Guy";
            $dialogue = "Buenas! esto es un re test";
            $background = "nature.jpg";
        break;
        case 2:
            $screenType = "dialogue";
            $character = "random-guy.jpg";
            $characterName = "Random Guy";
            $dialogue = "Escuché que te gusta testear. Es verdad?";
            $background = "nature.jpg";
        break;
        case 3:
            $screenType = "question";
            $character = "random-guy.jpg";
            $characterName = "Random Guy";
            $dialogue = "lorem ipsum";
            $background = "nature.jpg";
            $help = "Este es mi diálogo de ayuda";
            $rightOption = "Correcto";
            $falseOption1 = "Falso";
            $falseOption2 = "Falso";
            $falseOption3 = "Falso";
            $falseOption4 = "Falso";
        break;
        case 4:
            $screenType = "dialogue";
            $character = "random-guy.jpg";
            $characterName = "Random Guy";
            $dialogue = "Sarasa sarasa";
            $background = "nature.jpg";
        break;
        case 5:
            $screenType = "dialogue";
            $character = "random-guy.jpg";
            $characterName = "Random Guy";
            $dialogue = "Acá no cuidamos osos";
            $background = "nature.jpg";
        break;
        case 6:
            $screenType = "dialogue";
            $character = "random-guy.jpg";
            $characterName = "Random Guy";
            $dialogue = "Casi que volamos con poderes pero nos da naranaj hacerlo";
            $background = "nature.jpg";
        break;
        case 7:
            $screenType = "question";
            $character = "random-guy.jpg";
            $characterName = "Random Guy";
            $dialogue = "¿Esto es una redundancia?";
            $background = "nature.jpg";
            $help = "Este es mi diálogo de ayuda";
            $rightOption = "123";
            $falseOption1 = "456";
            $falseOption2 = "789";
            $falseOption3 = "000";
            $falseOption4 = "Correcto";
        break;
        case 8:
            $screenType = "dialogue";
            $character = "random-guy.jpg";
            $characterName = "Random Guy";
            $dialogue = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHH!!!!!!!!!!!!!!!!";
            $background = "nature.jpg";
        break;
        default:
        $screenType = "dialogue";
        $character = "error.png";
        $characterName = "Raúl 404";
        $dialogue = "Nos quedamos sin diálogos";
        $background = "error404.png";
    }
    $elements = array($screenType, $character, $characterName, $dialogue, $background);
    if ($screenType == "question") {
        array_push($elements,$help, $rightOption, $falseOption1, $falseOption2, $falseOption3, $falseOption4);
    }
    return ($elements);
}
?>