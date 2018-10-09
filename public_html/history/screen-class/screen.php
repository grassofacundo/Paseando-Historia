<?php
include '../screens/screen_selector.php';

    class screen{
        private $character;
        public function getCharacter() {return $this->character;}
        private $characterName;
        public function getCharacterName() {return $this->characterName;}
        private $background;
        public function getBackground() {return $this->background;}
        private $backgroundColor;
        public function getBackgroundColor() {return $this->backgroundColor;}
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
            $this->backgroundColor = $elements[5];
            if ($this->screenType == "question") {
                $this->manageQuestion($elements);
            }
        }

        public function manageQuestion($elements) {
            $rightGroup = array($elements[6], $elements[7]);
            $falseGroup1 = array($elements[8], $elements[9]);
            $falseGroup2 = array($elements[10], $elements[11]);
            $falseGroup3 = array($elements[12], $elements[13]);
            $falseGroup4 = array($elements[14], $elements[15]);
            $_SESSION["rightAnswer"] = $elements[6];
            $wrongGroups = array($falseGroup1, $falseGroup2, $falseGroup3, $falseGroup4);
            shuffle($wrongGroups);
            $this->answers = array($rightGroup, $wrongGroups[0], $wrongGroups[1]);
            shuffle($this->answers);
        }
    }
?>