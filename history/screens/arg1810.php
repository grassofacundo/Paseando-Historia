<?php
function arg1810($screenNum){
    switch((int)$screenNum){
        case 1:
            $screenType = "dialogue";
            $character = "NoOne.png";
            $characterName = " ";
            $dialogue = "...";
            $background = "viernes18.jpg";
        break;
        case 2:
            $screenType = "dialogue";
            $character = "pena.png";
            $characterName = "Nicolás Rodriguez Peña";
            $dialogue = "Hola! Mi nombre es Nicolás Rodríguez Peña, me dijeron que iba a venir a nuestra reunión.";
            $background = "casa_pena_afuera.jpg";
        break;
        case 3:
            $screenType = "dialogue";
            $character = "pena.png";
            $characterName = "Nicolás Rodriguez Peña";
            $dialogue = "Usted sabe, esta casa aquí atrás es mía, estamos reunidos muchos políticos aquí porque están pasando cosas importantes con respecto al actual virrey y con la idea de independencia.";
            $background = "casa_pena_afuera.jpg";
        break;
        case 4:
            $screenType = "dialogue";
            $character = "pena.png";
            $characterName = "Nicolás Rodriguez Peña";
            $dialogue = "De hecho, hace poco sucedió un hecho clave en España ¿Sabe de lo que estoy hablando?";
            $background = "casa_pena_afuera.jpg";
        break;
        case 5:
            $screenType = "question";
            $character = "pena.png";
            $characterName = "Nicolás Rodriguez Peña";
            $dialogue = "¿Sabe qué hecho importante sucedió en España?";
            $background = "casa_pena_afuera.jpg";
            $rightOption = "Sí, la toma de Sevilla a manos de los franceses y la caída de la junta";
            $rightHelp = "Exacto! Sevilla es una ciudad clave y esa junta era la que le daba poder al virrey de aquí";
            $falseOption1 = "Una gran crisis financiera";
            $falseHelp1 = "No precisamente, algo más relacionado a la guerra";
            $falseOption2 = "Quieren reconocer nuestro país como independiente";
            $falseHelp2 = "No no, es más, aquí en America todavía están los ejercitos de la corona española para evitar cualquier tipo de intento de independecia";
            $falseOption3 = "Una invasión de Rusia";
            $falseHelp3 = "Rusia está bastante lejos, no tiene ningún papel importante aquí";
            $falseOption4 = "Una guerra civil española";
            $falseHelp4 = "Mmm... no no, algo relacionado a la guerra, sí, pero con otro país";
        break;
        case 6:
        $screenType = "dialogue";
        $character = "pena.png";
        $characterName = "Nicolás Rodriguez Peña";
        $dialogue = "Exacto! Con la caida de la junta, el virrey Cisneros perdió mucho apoyo y nosotros estamos viendo qué hacer al respecto. Por favor, pase.";
        $background = "casa_pena_afuera.jpg";
        break;
        case 7:
            $screenType = "dialogue";
            $character = "pena.png";
            $characterName = "Nicolás Rodriguez Peña";
            $dialogue = "Por favor, siéntase como en casa. Aquí estamos reunidos muchos políticos jóvenes con ansias de cambios revolucionarios.";
            $background = "Casa_de_Pena.jpg";
        break;
        case 8:
            $screenType = "dialogue";
            $character = "belgrano.png";
            $characterName = "Manuel Belgrano";
            $dialogue = "Estamos todos muy emocionados con la caída de la junta y nos alegra que haya venido a hablar de política con nosotros";
            $background = "Casa_de_Pena.jpg";
        break;
        case 9:
            $screenType = "dialogue";
            $character = "belgrano.png";
            $characterName = "Manuel Belgrano";
            $dialogue = "Una pregunta sobre estos sucesos ¿Sabe qué significa que la junta haya caído?";
            $background = "Casa_de_Pena.jpg";
        break;
        case 10:
            $screenType = "question";
            $character = "belgrano.png";
            $characterName = "Manuel Belgrano";
            $dialogue = "¿Sabe qué significa que la junta haya caído?";
            $background = "Casa_de_Pena.jpg";
            $rightOption = "El actual virrey Cisneros fue designado por la junta de Sevilla, al estar tomada, ya no tiene legitimidad aquí";
            $rightHelp = "Tal cual! Mucha gente aquí en el Virreynato del Río de la Plata (porque todavía no se llama Argentina) cree que debería retirarse";
            $falseOption1 = "Que los ingleses pueden conquistarnos más fácilmente";
            $falseHelp1 = "No no, los ingleses están con otros problemas allá en Europa, nuestros problemas son sólo con la Corono Española";
            $falseOption2 = "El virrey Saavedra asumirá en el poder";
            $falseHelp2 = "No no, Saavedra es un político y militar de aquí, no es español. El virrey actual se llama Cisneros";
            $falseOption3 = "La independencia argentina";
            $falseHelp3 = "Falta para eso! Por ahora se está hablando de revolución. La independencia llegará en 1816 recién";
            $falseOption4 = "Los españoles van a venir a atacarnos";
            $falseHelp4 = "No! Están muy ocupados con las invasiones francesas.";
        break;
        case 11:
            $screenType = "dialogue";
            $character = "belgrano.png";
            $characterName = "Manuel Belgrano";
            $dialogue = "¡Muy bien! Me alegro que esté tan comprometido con la causa. Bueno, esta va a ser una larga noche de discusiones políticas ¡Comencemos!";
            $background = "Casa_de_Pena.jpg";
        break;
        case 12:
            $screenType = "dialogue";
            $character = "noOne.png";
            $characterName = " ";
            $dialogue = "...";
            $background = "sabado19.jpg";
        break;
        case 13:
            $screenType = "dialogue";
            $character = "belgrano.png";
            $characterName = "Manuel Belgrano";
            $dialogue = "!Uf! Estar toda la noche armando planes de revolución no es nada fácil";
            $background = "Casa_de_Pena.jpg";
        break;
        case 14:
            $screenType = "dialogue";
            $character = "belgrano.png";
            $characterName = "Manuel Belgrano";
            $dialogue = "Necesitamos consultar a las autoridades de inmediato ¿A quién crees que deberíamos acudir?";
            $background = "Casa_de_Pena.jpg";
        break;
        case 15:
            $screenType = "question";
            $character = "belgrano.png";
            $characterName = "Manuel Belgrano";
            $dialogue = "¿A qué autoridad política deberíamos acudir?";
            $background = "Casa_de_Pena.jpg";
            $rightOption = "Al Alcalde Lezica";
            $rightHelp = "Exacto! Belgrano junto a Saavedra acuden al Alcalde";
            $falseOption1 = "Al presidente de Argentina";
            $falseHelp1 = "No no, todavía no se llama Argentina, y la figura del presidente no existe, para eso faltan varios años";
            $falseOption2 = "A ninguna !Tomemos las armas¡";
            $falseHelp2 = "Tranquilo, tanto Belgrano como Rodriguez Peña o Saavedra tienen mucha trayectoria política, prefieren hacer política antes que hacer una lucha armada";
            $falseOption3 = "A la Corona Española";
            $falseHelp3 = "Nooo! Los españoles no quieren la revolución, mejor busquemos una autoridad más cercana";
            $falseOption4 = "Al parlamento latinoamericano";
            $falseHelp4 = "No no, eso no existe. De hecho la gran mayoría de los países de America latina tienen autoridades de la corona española";
        break;
        case 16:
            $screenType = "dialogue";
            $character = "belgrano.png";
            $characterName = "Manuel Belgrano";
            $dialogue = "Excelente idea! Deberíamos ir con Saavedra a ver al alcalde. Por otro lado, Castelli debería hablar con el síndico procurador, Julián de Leyva";
            $background = "Casa_de_Pena.jpg";
        break;
        case 17:
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