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
            $screenType = "dialogue";
            $character = "lezica.jpg";
            $characterName = "Juan José Lezica";
            $dialogue = "Señores ¿En qué puedo ayudarlos?";
            $background = "oficina-lezica.jpg";
        break;
        case 18:
            $screenType = "question";
            $character = "lezica.jpg";
            $characterName = "Juan José Lezica";
            $dialogue = "¿Qué decidieron luego de su noche de discusión política?";
            $background = "oficina-lezica.jpg";
            $rightOption = "Queremos un cabildo abierto";
            $rightHelp = "Sí! De esa manera podrán discutir políticos y gente del pueblo sobre el futuro del virreynato";
            $falseOption1 = "Queremos reforzar la autoridad del virrey Cisneros";
            $falseHelp1 = "Nooo, el virrey Cisneros es de la corona española, la idea es destituirlo para que los políticos jóvenes de aquí asuman al gobierno";
            $falseOption2 = "Queremos empezar a llamarnos Argentina";
            $falseHelp2 = "Nooo, eso recién en 1824 pasa. Todavía estamos en 1810.";
            $falseOption3 = "Queremos irnos del país";
            $falseHelp3 = "No! No estuvieron toda la noche discutiendo para irse del país, hay que hacer que la corona española deje de ser la autoridad";
            $falseOption4 = "No decidimos nada, necesitamos su ayuda";
            $falseHelp4 = "No no, lo que se necesita es una posición activa de discusión. Hay que permitir el diálogo entre autoridades y pueblo de alguna manera";
        break;
        case 19:
            $screenType = "dialogue";
            $character = "lezica.jpg";
            $characterName = "Juan José Lezica";
            $dialogue = "Wow, realmente parecen convencidos de esto ¿Pero saben qué significa esto?";
            $background = "oficina-lezica.jpg";
        break;
        case 20:
            $screenType = "question";
            $character = "lezica.jpg";
            $characterName = "Juan José Lezica";
            $dialogue = "¿Saben qué significa un cabildo abierto?";
            $background = "oficina-lezica.jpg";
            $rightOption = "Una reunión pública entre autoridades y pueblo para debatir temas de interés para la ciudadanía";
            $rightHelp = "Sí, al fin una posibilidad de que la gente decida y no que todas las decisiones las tome la Corono Española";
            $falseOption1 = "Dejar todas las puertas del cabildo sin llave para que todos puedan participar según deseen";
            $falseHelp1 = "No! no es literal dejar el cabildo abierto. Decir Cabildo Abierto es simbólico";
            $falseOption2 = "Borrar la constitución y que toda la gente escriba lo que quiera";
            $falseHelp2 = "Nooo, no existe una constitución todavía, además la discusión la llevan adelante ciertos políticos, no todo el mundo";
            $falseOption3 = "Llamar a elecciones a presidente";
            $falseHelp3 = "No no, no existe la figura de presidente todavía";
            $falseOption4 = "Que se instaure el comunismo";
            $falseHelp4 = "Noo! Esto va por otro lado, primero hay que decidir con el pueblo qué hacemos con el virrey ¿Cómo se podrá discutir algo así entre todos?";
        break;
        case 21:
            $screenType = "dialogue";
            $character = "lezica.jpg";
            $characterName = "Juan José Lezica";
            $dialogue = "Sí que están convencidos, tal vez sea el momento de comenzar algo nuevo !Una nueva era de políticos jóvenes de aproxima!";
            $background = "oficina-lezica.jpg";
        break;
        case 22:
            $screenType = "dialogue";
            $character = "noOne.png";
            $characterName = " ";
            $dialogue = "...";
            $background = "domingo20.jpg";
        break;
        case 23:
            $screenType = "dialogue";
            $character = "pena.png";
            $characterName = "Nicolás Rodriguez Peña";
            $dialogue = "Señores, han pasado muchas cosas últimamente ¿Qué tal si nos ponemos al día?";
            $background = "Casa_de_Pena.jpg";
        break;
        case 24:
            $screenType = "dialogue";
            $character = "belgrano.png";
            $characterName = "Manuel Belgrano";
            $dialogue = "Nosotros fuimos a hablar con el Alcalde Lezica, Saavedra estaba ahí. Solicitamos que hable con Cisneros y llamen a un Cabildo Abierto";
            $background = "Casa_de_Pena.jpg";
        break;
        case 25:
            $screenType = "dialogue";
            $character = "saavedra.jpg";
            $characterName = "Cornelio Saavedra";
            $dialogue = "Sí, pero hay un pequeño detalle con Cisneros";
            $background = "Casa_de_Pena.jpg";
        break;
        case 26:
            $screenType = "question";
            $character = "saavedra.jpg";
            $characterName = "Cornelio Saavedra";
            $dialogue = "¿Qué hizo Cisneros cuando se le solicitó el Cabildo Abierto?";
            $background = "Casa_de_Pena.jpg";
            $rightOption = "Cisneros se reunió con las fuerzas militares y se intentó preparar ante cualquier disturbio";
            $rightHelp = "Bien! Eso significa que quiso prepararse para usar las fuerzas militares en su interés por si alguien intentaba hacer una revuelta";
            $falseOption1 = "Renunció instantaneamente";
            $falseHelp1 = "No! Cisneros tiene mucho interés en seguir siendo virrey, hizo otra cosa";
            $falseOption2 = "Accedió instantaneamente";
            $falseHelp2 = "Ojalá hubiese sido tan fácil. No, de hecho Cisneros hizo anto para evitar cualquier revuelta";
            $falseOption3 = "Se fue a España";
            $falseHelp3 = "No no, Cisneros sigue acá y no tiene intenciones de dejar el poder";
            $falseOption4 = "Prohibió a cualquier persona acercarse al Cabildo";
            $falseHelp4 = "Noo! La autoridad de Cisneros está debilitada, no tiene el poder de hacer eso";
        break;
        case 27:
            $screenType = "dialogue";
            $character = "saavedra.jpg";
            $characterName = "Cornelio Saavedra";
            $dialogue = "Exacto! Quiso apelar a las fuerzas militares para usarlas en nuestra contra. Pero como yo soy el comandante del grupo militar más importante pude influenciar sobre la decisión";
            $background = "Casa_de_Pena.jpg";
        break;
        case 28:
            $screenType = "dialogue";
            $character = "belgrano.png";
            $characterName = "Manuel Belgrano";
            $dialogue = "Y como resultado. !El cabildo abierto será realizado el 22 de Mayo!";
            $background = "Casa_de_Pena.jpg";
        break;
        case 29:
            $screenType = "dialogue";
            $character = "noOne.png";
            $characterName = " ";
            $dialogue = "...";
            $background = "lunes21.jpg";
        break;
        case 30:
            $screenType = "dialogue";
            $character = "donado.jpg";
            $characterName = "Agustín José Donado";
            $dialogue = "Hola, soy Agustín Donado. Creo que no nos hemos presentado todavía, soy el encargado de la impresión de las invitaciones de las personas que vendrán mañana al cabildo abierto";
            $background = "cabildo-vacio.jpg";
        break;
        case 31:
            $screenType = "dialogue";
            $character = "donado.jpg";
            $characterName = "Agustín José Donado";
            $dialogue = "Hablando de invitaciones ¿Tienen idea quiénes serán invitados para mañana?";
            $background = "cabildo-vacio.jpg";
        break;
        case 32:
            $screenType = "question";
            $character = "donado.jpg";
            $characterName = "Agustín José Donado";
            $dialogue = "¿Quiénes recibirán invitaciones para el cabildo abierto de mañana?";
            $background = "cabildo-vacio.jpg";
            $rightOption = "Necesitamos 450 invitaciones. Invitaremos a los principales vecinos y autoridades de la capital";
            $rightHelp = "Exacto, se invitarán autoridades y vecinos";
            $falseOption1 = "Necesitamos 500 invitaciones. Invitaremos a los políticos de todo el país";
            $falseHelp1 = "Un poco menos de invitaciones, además los políticos invitados serán sólo de la capital";
            $falseOption2 = "Necesitamos 100 invitaciones. Estarán invitadas sólo las autoridades de la Corona Española";
            $falseHelp2 = "No no, no queremos nada con la Corona Española en el cabildo abierto. Además, se esperan invitar muchas más personas que sólo 100";
            $falseOption3 = "Necesitamos 2000 invitaciones";
            $falseHelp3 = "No! Esas son muchas invitaciones. Son muchas menos, además tenés que pensar quiénes estarán invitados";
            $falseOption4 = "No necesitamos invitaciones, el cabildo estará abierto para todos";
            $falseHelp4 = "No no, se necesita un número concreto de personas, porque luego de discutir, se votará y esas personas tendrán que firmar";
        break;
        case 33:
            $screenType = "dialogue";
            $character = "donado.jpg";
            $characterName = "Agustín José Donado";
            $dialogue = "Excelente, las invitaciones serán enviadas. Nos vemos señor";
            $background = "cabildo-vacio.jpg";
        break;
        case 34:
            $screenType = "dialogue";
            $character = "saavedra.jpg";
            $characterName = "Cornelio Saavedra";
            $dialogue = "Buen día, veo que las invitaciones ya están en funcionamiento, por otro lado, tenemos un par de tareas de rutina hasta que…";
            $background = "cabildo-vacio.jpg";
        break;
        case 35:
            $screenType = "dialogue";
            $character = "noOne.png";
            $characterName = " ";
            $dialogue = "*ruido de muchedumbre";
            $background = "cabildo-vacio.jpg";
        break;
        case 36:
            $screenType = "dialogue";
            $character = "saavedra.jpg";
            $characterName = "Cornelio Saavedra";
            $dialogue = "Hay una gran movilización en las afueras del cabildo ¿Qué podrá ser?";
            $background = "cabildo-lleno.jpg";
        break;
        case 37:
            $screenType = "question";
            $character = "saavedra.jpg";
            $characterName = "Cornelio Saavedra";
            $dialogue = "¿Qué clase de movilización es esta?";
            $background = "cabildo-lleno.jpg";
            $rightOption = "Es la LEGION INFERNAL. Encabezados por Domingo French y Antonio Luis Beruti";
            $rightHelp = "Sí. La gente vino a apoyar el cabildo abierto, incluso muchos de ellos están armados";
            $falseOption1 = "Son los ejercitos españoles";
            $falseHelp1 = "No no, la multitud consiste en personas de aquí, no son españoles";
            $falseOption2 = "Es el desfile típico de esta época";
            $falseHelp2 = "No! Este es un movimiento político";
            $falseOption3 = "Son los militares liderados por Cisneros";
            $falseHelp3 = "No no, los militares siguen a Saavedra, Cisneros no tiene autoridad sobre ellos";
            $falseOption4 = "Son los ejercitos ingleses que vienen a atacarnos";
            $falseHelp4 = "Nooo, los ingleses no tienen nada que ver acá, ellos están con sus propios problemas en algún lado lejos de aquí";
        break;
        case 38:
            $screenType = "dialogue";
            $character = "saavedra.jpg";
            $characterName = "Cornelio Saavedra";
            $dialogue = "Cierto! French y Beruti están ahí ¿Cuáles son sus demandas?";
            $background = "cabildo-lleno.jpg";
        break;
        case 39:
            $screenType = "question";
            $character = "saavedra.jpg";
            $characterName = "Cornelio Saavedra";
            $dialogue = "¿Cuáles son las demandas de la legión infernal?";
            $background = "cabildo-lleno.jpg";
            $rightOption = "Están metiendo presión para que se realice el cabildo abierto y exigen la destitución inmediata de Cisneros";
            $rightHelp = "Claro! La muchedumbre duda mucho de la palabra de los políticos y más de la palabra de los españoles, prefirieron tomar cartas en el asunto";
            $falseOption1 = "La legión infernal está conformada por el pueblo y quieren que se cancele el cabildo abierto";
            $falseHelp1 = "No no, es verdad que es el pueblo, pero ellos vienen a apoyar el cabildo abierto";
            $falseOption2 = "Vienen a defender a Cisneros para que se mantenga en el poder";
            $falseHelp2 = "No! Estás personas están movilizadas para que Cisneros deje el poder de inmediato";
            $falseOption3 = "Es el pueblo, quieren que establezcamos una guerra contra la Corona Española";
            $falseHelp3 = "No no! Nos interesan más nuestras propias cosas, no hay interés en entrar en guerra con España";
            $falseOption4 = "Sólo están reunidos aquí, no buscan nada en particular";
            $falseHelp4 = "No! Ellos están aquí por algo muy importante!";
        break;
        case 40:
            $screenType = "dialogue";
            $character = "saavedra.jpg";
            $characterName = "Cornelio Saavedra";
            $dialogue = "Nos viene muy ben el apoyo al Cabildo Abierto. Pero no podemos destituir a Cisneros inmediatamente, necesitamos discutir eso en el Cabildo Abierto de mañana";
            $background = "cabildo-lleno.jpg";
        break;
        case 41:
            $screenType = "dialogue";
            $character = "saavedra.jpg";
            $characterName = "Cornelio Saavedra";
            $dialogue = "Intentaré calmas las aguas garantizando apoyo militar a sus reclamos";
            $background = "cabildo-lleno.jpg";
        break;
        case 42:
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