<?php
function intro($screenNum){
    switch((int)$screenNum){
        case 1:
            $screenType = "dialogue";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "Bienvenides a nuestra mágica biblioteca escolar!";
            $background = "biblioteca.jpg";
        break;
        case 2:
            $screenType = "dialogue";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "Se van a dar cuenta rápido que esta no es una biblioteca ni común, ni corriente y mucho menos aburrida";
            $background = "biblioteca.jpg";
        break;
        case 3:
            $screenType = "question";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "A todo esto ¿Ustedes están en clase de Historia no?";
            $background = "biblioteca.jpg";
            $rightOption = "Sí señora";
            $rightHelp = "Esto no debería aparecer";
            $falseOption1 = "Sí";
            $falseHelp1 = "Falsa ayuda 1";
            $falseOption2 = "Exacto";
            $falseHelp2 = "Falsa ayuda 2";
            $falseOption3 = "Sep";
            $falseHelp3 = "Falsa ayuda 3";
            $falseOption4 = "Sa";
            $falseHelp4 = "Falsa ayuda 4";
        break;
        case 4:
            $screenType = "dialogue";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "¡Oooohh que linda la historia! Mi materia favorita ¿Qué les parece a ustedes? ¿Lenta? ¿Aburrida? ¡Jajá! A lo mejor ESTUDIAR historia es aburrido… pero ¿qué tal HACER historia?";
            $background = "biblioteca.jpg";
        break;
        case 5:
            $screenType = "question";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = " ";
            $background = "libro-magico.jpg";
            $rightOption = "WOW";
            $rightHelp = "Esto no debería aparecer";
            $falseOption1 = "ZARPADO";
            $falseHelp1 = "Falsa ayuda 1";
            $falseOption2 = "INCREIBLE";
            $falseHelp2 = "Falsa ayuda 2";
            $falseOption3 = "TREMENDO";
            $falseHelp3 = "Falsa ayuda 3";
            $falseOption4 = "FAAAAA";
            $falseHelp4 = "Falsa ayuda 4";
        break;
        case 6:
            $screenType = "dialogue";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "¡Acá pasa toda la magia! Este es nuestra propia máquina del tiempo, nada más que más cómoda porque entra en cualquier mochila";
            $background = "biblioteca.jpg";
        break;
        case 7:
            $screenType = "dialogue";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "¿Qué quieren visitar? ¿La revolución francesa? ¿La independencia Argentina? ¿La llegada de Colón? Todo es posible con este libro, un sólo toquecito y ¡listo! Ya están en carne y hueso donde ustedes quieran.";
            $background = "biblioteca.jpg";
        break;
        case 8:
            $screenType = "dialogue";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "Peeeeero, acuerdense que seguimos en la escuela, así que tienen tarea. Todes los que viajen tienen que traer un recuerdo de la época que visiten, algo característico del momento, piensenlo como un souvenir. Nada más que ese souvenir queda acá, en la escuela, como parte de nuestra colección.";
            $background = "biblioteca.jpg";
        break;
        case 9:
            $screenType = "dialogue";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "Bueno, basta de charla que se nos va a la hora ¿Quién empieza?";
            $background = "biblioteca.jpg";
        break;
        case 10:
            $screenType = "finished";
            $character = " ";
            $characterName = " ";
            $dialogue = " ";
            $background = " ";
        break;
        default:
            $screenType = "dialogue";
            $character = "error.png";
            $characterName = "Raúl 404";
            $dialogue = "Nos quedamos sin diálogos";
            $background = "error404.png";
    }
    $backgroundColor = "rgb(40, 167, 69, 0.6)";
    $elements = array($screenType, $character, $characterName, $dialogue, $background, $backgroundColor);
    if ($screenType == "question") {
        array_push($elements, $rightOption, $rightHelp, $falseOption1, $falseHelp1, $falseOption2, $falseHelp2, $falseOption3, $falseHelp3, $falseOption4, $falseHelp4);
    }
    return ($elements);
}
?>