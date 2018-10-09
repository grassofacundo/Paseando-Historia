<?php
function intro($screenNum){
    switch((int)$screenNum){
        case 1:
            $screenType = "dialogue";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "Bienvenides a nuestra biblioteca escolar! Se van a dar cuenta rápido que esta no es una biblioteca común y corriente.";
            $background = "biblioteca.jpg";
        break;
        case 2:
            $screenType = "dialogue";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "Esta es una biblioteca mágica! Acá vamos a aprender historia de una forma particular";
            $background = "biblioteca.jpg";
        break;
        case 3:
            $screenType = "dialogue";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "Acá vamos a ¡VIAJAR EN EL TIEMPO!";
            $background = "biblioteca.jpg";
        break;
        case 4:
            $screenType = "dialogue";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "¿Me están prestando atención?";
            $background = "biblioteca.jpg";
        break;
        case 5:
            $screenType = "question";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "¿Me están escuchando?";
            $background = "biblioteca.jpg";
            $rightOption = "Sí, vamos a viajar en el tiempo";
            $rightHelp = "Muy bien! Están atentes";
            $falseOption1 = "Sí, podemos traer personajes del pasado";
            $falseHelp1 = "Nooo! Nosotres vamos a viajar en el tiempo, nadie va a venir";
            $falseOption2 = "Sí, vamos a hacer experimentos de química";
            $falseHelp2 = "¡Estamos en historia! No, vamos a poder visitar épocas de la historia";
            $falseOption3 = "Eeehh… no, estaba con el celu";
            $falseHelp3 = "Dejenló un segundo! Repito, vamos a viajar en el tiempo a conocer la historia    ";
            $falseOption4 = "¿Podría repetir por favor?";
            $falseHelp4 = "¡Cómo no! Vamos a viajar en el tiempo para conocer las diferentes épocas históricas";
        break;
        case 6:
            $screenType = "dialogue";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "Así me gusta, prestando atención.";
            $background = "biblioteca.jpg";
        break;
        case 7:
            $screenType = "dialogue";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "Ustedes se preguntarán ¿Cómo vamos a viajar? Vamos a usar esto:";
            $background = "biblioteca.jpg";
        break;
        case 8:
            $screenType = "dialogue";
            $character = "noOne.png";
            $characterName = " ";
            $dialogue = "...";
            $background = "libro-magico.jpg";
        break;
        case 9:
            $screenType = "dialogue";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "Este es nuestro PASEA HISTORIAS, es un libro mágico que nos permite viajar a cualquier época histórica y convertirnos en personajes de la época.";
            $background = "libro-magico.jpg";
        break;
        case 10:
            $screenType = "dialogue";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "En nuestras visitas tenemos que pasar desapercibides y contestar bien a todas las preguntas que nos hagan las personas de cada época";
            $background = "libro-magico.jpg";
        break;
        case 11:
            $screenType = "dialogue";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "¡Pero no se asusten! Que yo voy a estar con ustedes ayudándoles si no saben algo.";
            $background = "libro-magico.jpg";
        break;
        case 12:
            $screenType = "question";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "¿Hasta acá estamos?";
            $background = "biblioteca.jpg";
            $rightOption = "Sí, en cada época nos van a hacer preguntas y si no sabemos algo, nos vas a ayudar";
            $rightHelp = "Exacto, así que tranquiles que no pasa nada si no saben algo. ¡El objetivo es aprender!";
            $falseOption1 = "Sí, vos nos vas a hacer preguntas y tenemos que contestar bien";
            $falseHelp1 = "¿Viste que estaban distraides? Las preguntas se las hacen los personajes de las épocas, yo sólo les ayudo si no saben algo";
            $falseOption2 = "Sí, le tenemos que hacer preguntas a los personajes para aprender";
            $falseHelp2 = "Nooo, ustedes tienen que contestar sus preguntas, no hacerlas";
            $falseOption3 = "Sí, hay que escribir en el pasea historias lo que nos van contando";
            $falseHelp3 = "No no, el pasea historias sirve para viajar en el tiempo, después los personajes nos van a hacer preguntas";
            $falseOption4 = "Estaba con el celu ¿Qué dijo?";
            $falseHelp4 = "¡Más atentes por favor! Los personajes en cada época nos van a hacer preguntas y hay que contestarlas bien, si no saben alguna, yo los ayudo";
        break;
        case 13:
            $screenType = "dialogue";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "Exacto, bien, ya sabemos que vamos a hacer entonces.";
            $background = "biblioteca.jpg";
        break;
        case 14:
            $screenType = "dialogue";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "Entonces ¿Qué quieren visitar? ¿La revolución francesa? ¿La independencia Argentina? ¿La llegada de Colón? Todo es posible con este libro.";
            $background = "biblioteca.jpg";
        break;
        case 15:
            $screenType = "dialogue";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "Peeeeero, acuerdense que seguimos en la escuela, así que tienen tarea.";
            $background = "biblioteca.jpg";
        break;
        case 16:
            $screenType = "dialogue";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "Todes los que viajen tienen que traer un recuerdo de la época que visiten, algo característico del momento, piensenlo como un souvenir. Nada más que ese souvenir queda acá, en la escuela, como parte de nuestra colección.";
            $background = "biblioteca.jpg";
        break;
        case 17:
            $screenType = "dialogue";
            $character = "teacher-right.png";
            $characterName = "Profe historia";
            $dialogue = "Bueno, basta de charla que se nos va a la hora ¿Quién empieza?";
            $background = "biblioteca.jpg";
        break;
        case 18:
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
    $backgroundColor = "rgba(40, 167, 69, 0.6)";
    $elements = array($screenType, $character, $characterName, $dialogue, $background, $backgroundColor);
    if ($screenType == "question") {
        array_push($elements, $rightOption, $rightHelp, $falseOption1, $falseHelp1, $falseOption2, $falseHelp2, $falseOption3, $falseHelp3, $falseOption4, $falseHelp4);
    }
    return ($elements);
}
?>