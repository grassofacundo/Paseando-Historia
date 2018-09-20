<?php
function arg1810($screenNum){
    switch((int)$screenNum){
        case 1:
            $screenType = "dialogue";
            $character = "rodriguez-pena.jpg";
            $characterName = "Nicolás Rodriguez Peña";
            $dialogue = "Hola! Lo estábamos esperando! Mi nombre es Nicolás Rodríguez Peña";
            $background = "casa_pena_afuera.jpg";
        break;
        case 2:
            $screenType = "dialogue";
            $character = "rodriguez-pena.jpg";
            $characterName = "Nicolás Rodriguez Peña";
            $dialogue = "Me dijeron que iba a venir a nuestra reunión. Sólo para estar seguro que usted es quien dice ser...";
            $background = "casa_pena_afuera.jpg";
        break;
        case 3:
            $screenType = "question";
            $character = "rodriguez-pena.jpg";
            $characterName = "Nicolás Rodriguez Peña";
            $dialogue = "¿Me podría nombrar a 3 integrantes de la reunión de hoy?";
            $background = "casa_pena_afuera.jpg";
            $rightOption = "Castelli, Belgrano y Paso";
            $rightHelp = "Claro! Junto a otros más!";
            $falseOption1 = "Saavedra y Mitre";
            $falseHelp1 = "La pregunta dice 3...";
            $falseOption2 = "Viamonte, San Martín y Rosas";
            $falseHelp2 = "No son de la misma época";
            $falseOption3 = "Rivadavia, su hermano y su hijo";
            $falseHelp3 = "No, nada que ver";
            $falseOption4 = "Donald Trump";
            $falseHelp4 = "#FueraYankeesDeIrak";
        break;
        case 4:
            $screenType = "dialogue";
            $character = "rodriguez-pena.jpg";
            $characterName = "Nicolás Rodriguez Peña";
            $dialogue = "Exacto! Adelante. Le presento al resto del equipo";
            $background = "casa_pena_afuera.jpg";
        break;
        case 5:
            $screenType = "dialogue";
            $character = "rodriguez-pena.jpg";
            $characterName = "Nicolás Rodriguez Peña";
            $dialogue = "Por favor, sientase como en casa. Aquí presentes están los señores Juan José Castelli, Manuel Belgrano, Juan José Paso, Antonio Luis Beruti, Eustoquio Díaz Vélez, Feliciano Antonio Chiclana, José Darragueira, Martín Jacobo Thompson y Juan José Viamonte. Por favor, tome asiento.";
            $background = "Casa_de_Pena.jpg";
        break;
        case 6:
            $screenType = "dialogue";
            $character = "belgrano.jpg";
            $characterName = "Manuel Belgrano";
            $dialogue = "Estamos muy emocionados por los eventos a nivel mundial que están sucediendo. Los franceses han tomado una ciudad en España que nos ha cambiado totalmente el panorama. Está al tanto de eso?";
            $background = "Casa_de_Pena.jpg";
        break;
        case 7:
            $screenType = "question";
            $character = "belgrano.jpg";
            $characterName = "Manuel Belgrano";
            $dialogue = "¿Está al tanto de lo que pasó en España?";
            $background = "Casa_de_Pena.jpg";
            $rightOption = "Sí, la toma de Sevilla y la caída de la junta";
            $rightHelp = "Exacto, eso queda en España";
            $falseOption1 = "Cosas locas";
            $falseHelp1 = "No tiene sentido eso";
            $falseOption2 = "ESTA OPCIÓN ES FALSA";
            $falseHelp2 = "Claramente...";
            $falseOption3 = "La revolucoón rusa";
            $falseHelp3 = "Seguí participando Lenin";
            $falseOption4 = "La entrega de los oscars";
            $falseHelp4 = "Que gane Di Caprio!";
        break;
        case 8:
            $screenType = "dialogue";
            $character = "belgrano.jpg";
            $characterName = "Manuel Belgrano";
            $dialogue = "Exacto! La caída de la junta de Sevilla es un factor clave para que pensemos en una revolución. Aunque también nos inspira la revolución francesa, o la independencia de EEUU, son hechos de hace algunos años que nos permiten pensar en un país con más libertad.";
            $background = "Casa_de_Pena.jpg";
        break;
        case 9:
            $screenType = "dialogue";
            $character = "belgrano.jpg";
            $characterName = "Manuel Belgrano";
            $dialogue = "No tengo mucho más para decir, hacé click para terminar";
            $background = "Casa_de_Pena.jpg";
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
    $backgroundColor = "rgb(184, 73, 15, 0.6)";
    $elements = array($screenType, $character, $characterName, $dialogue, $background, $backgroundColor);
    if ($screenType == "question") {
        array_push($elements, $rightOption, $rightHelp, $falseOption1, $falseHelp1, $falseOption2, $falseHelp2, $falseOption3, $falseHelp3, $falseOption4, $falseHelp4);
    }
    return ($elements);
}
?>