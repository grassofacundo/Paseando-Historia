<?php
include '../screens/screen_selector.php';

    class screen{
        private $character;
        public function getCharacter() {return $this->character;}
        private $characterName;
        public function getCharacterName() {return $this->characterName;}
        private $background;
        public function getBackground() {return $this->background;}
        private $dialogue;
        public function getDialogue() {return $this->dialogue;}
        private $help;
        public function getHelp() {return $this->help;}
        private $answers = array();
        public function getAnswers() {return $this->answers;}
        private $screenType;
        public function getScreenType() {return $this->screenType;}

        public function __construct($chapterCode, $currentScreen)
        {
            $elements = getScreenElements($chapterCode, $currentScreen);
            $this->screenType = $elements[0];
            $this->character = $elements[1];
            $this->characterName = $elements[2];
            $this->dialogue = $elements[3];
            $this->background = $elements[4];
            if ($this->screenType == "question") {
                $this->help = $elements[5];
                $_SESSION["rightAnswer"] = $elements[6];
                $wrongAnswers = array($elements[7], $elements[8], $elements[9], $elements[10]);
                shuffle($wrongAnswers);
                $this->answers = array($_SESSION["rightAnswer"], $wrongAnswers[0], $wrongAnswers[1]);
                shuffle($this->answers);
            }
        }
    }
?>