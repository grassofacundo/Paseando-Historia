<?php
include '../screens/arg1810_screen_selector.php';

    class screen{
        private $character;
        public function getCharacter() {return $this->character;}
        private $dialogue;
        public function getDialogue() {return $this->dialogue;}
        private $question;
        private $correctAnswer;
        private $currentScreen;
        public function getCurrentScreen() {return $this->currentScreen;}

        public function __construct($chapterCode, $currentScreen, $isQuestion = false)
        {
            $elements = getScreenElements($chapterCode, $currentScreen);
            $this->character = $elements[0];
            $this->dialogue = $elements[1];
        }
    }
?>