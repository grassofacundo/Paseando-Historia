<?php
include '../screens/arg1810_screen_selector.php';

    class screen{
        private $character;
        public function getCharacter() {return $this->character;}
        private $background;
        public function getBackground() {return $this->background;}
        private $dialogue;
        public function getDialogue() {return $this->dialogue;}
        private $answers = array();
        public function getAnswers() {return $this->answers;}

        public function __construct($chapterCode, $currentScreen, $isQuestion = false)
        {
            $elements = getScreenElements($chapterCode, $currentScreen);
            $this->character = $elements[1];
            $this->dialogue = $elements[2];
            $this->background = $elements[3];
            if ($elements[0]) {
                $_SESSION["rightAnswer"] = $elements[4];
                $wrongAnswers = array($elements[5], $elements[6], $elements[7], $elements[8]);
                shuffle($wrongAnswers);
                $this->answers = array($_SESSION["rightAnswer"], $wrongAnswers[0], $wrongAnswers[1]);
                shuffle($this->answers);
            }
        }
    }
?>