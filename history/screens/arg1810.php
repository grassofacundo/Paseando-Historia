<?php
function arg1810(){
    switch((int)$screenNum){
        case 1:
            $isQuestion = false;
            $character = "hombre01.png";
            $characterName = "Nicolás Rodriguez Peña";
            $dialogue = "Hola! Lo estábamos esperando! Mi nombre es Nicolás Rodríguez Peña";
            $background = "casa_pena_afuera.jpg";
        break;
        case 2:
            $isQuestion = false;
            $character = "hombre01.png";
            $characterName = "Nicolás Rodriguez Peña";
            $dialogue = "Me dijeron que iba a venir a nuestra reunión. Sólo para estar seguro que usted es quien dice ser...";
            $background = "casa_pena_afuera.jpg";
        break;
        case 3:
            $isQuestion = true;
            $character = "hombre01.png";
            $characterName = "Nicolás Rodriguez Peña";
            $dialogue = "¿Me podría nombrar a 3 integrantes de la reunión de hoy?";
            $background = "casa_pena_afuera.jpg";
            $help = "Este es mi diálogo de ayuda";
            $rightOption = "Castelli, Belgrano y Paso";
            $falseOption1 = "Melchor, Gaspar y Baltazar";
            $falseOption2 = "Mou, Larry, Curly";
            $falseOption3 = "Rick, Morty, Summer";
            $falseOption4 = "Francella, Maradona, Ricky Fort";
        break;
        case 4:
            $isQuestion = false;
            $character = "hombre01.png";
            $characterName = "Nicolás Rodriguez Peña";
            $dialogue = "Exacto! Adelante. Le presento al resto del equipo";
            $background = "casa_pena_afuera.jpg";
        break;
        case 5:
            $isQuestion = false;
            $character = "hombre01.png";
            $characterName = "Nicolás Rodriguez Peña";
            $dialogue = "Por favor, sientase como en casa. Aquí presentes están los señores Juan José Castelli, Manuel Belgrano, Juan José Paso, Antonio Luis Beruti, Eustoquio Díaz Vélez, Feliciano Antonio Chiclana, José Darragueira, Martín Jacobo Thompson y Juan José Viamonte. Por favor, tome asiento.";
            $background = "Casa_de_Pena.jpg";
        break;
        case 6:
            $isQuestion = false;
            $character = "belgrano.jpg";
            $characterName = "Manuel Belgrano";
            $dialogue = "Estamos muy emocionados por los eventos a nivel mundial que están sucediendo. Los franceses han tomado una ciudad en España que nos ha cambiado totalmente el panorama. Está al tanto de eso?";
            $background = "Casa_de_Pena.jpg";
        break;
        case 7:
            $isQuestion = true;
            $character = "belgrano.jpg";
            $characterName = "Manuel Belgrano";
            $dialogue = "¿Está al tanto de lo que pasó en España?";
            $background = "Casa_de_Pena.jpg";
            $help = "Este es mi diálogo de ayuda";
            $rightOption = "Sí, la toma de Sevilla y la caída de la junta";
            $falseOption1 = "Sí, el que depositó pesos recibirá pesos";
            $falseOption2 = "Sí, el gobierno intergaláctico nos declaró la guerra";
            $falseOption3 = "Sí, Voldemort tomó la Bastilla";
            $falseOption4 = "Qué sé yo estoy re loco";
        break;
        case 8:
            $isQuestion = false;
            $character = "belgrano.jpg";
            $characterName = "Manuel Belgrano";
            $dialogue = "Exacto! La caída de la junta de Sevilla es un factor clave para que pensemos en una revolución. Aunque también nos inspira la revolución francesa, o la independencia de EEUU, son hechos de hace algunos años que nos permiten pensar en un país con más libertad.";
            $background = "Casa_de_Pena.jpg";
        break;
        default:
            $isQuestion = false;
            $character = "error.png";
            $characterName = "Raúl 404";
            $dialogue = "Nos quedamos sin diálogos";
            $background = "error404.png";
    }
    if ($finished = true) {
        return $finished;
    } else {
        $elements = array($isQuestion, $character, $characterName, $dialogue, $background);
        if ($isQuestion) {
            array_push($elements,$help, $rightOption, $falseOption1, $falseOption2, $falseOption3, $falseOption4);
        }
        return ($elements);
    }
}
?>