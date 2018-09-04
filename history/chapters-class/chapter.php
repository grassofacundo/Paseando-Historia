<?php
require_once "../screen-class/screen.php";

    class chapter {
        private $screen;
            function getScreen(){return $this->screens;}
            function setScreen($screen){$this->screens = $screen;}
        private $chapterCode;
            function getChapterCode(){return $this->chapterCode;}
            function setChapterCode($chapterCode){$this->chapterCode = $chapterCode;}

        public function __construct($chapterCode, $currentScreen)
        {
            $this->chapterCode = $chapterCode;
            $this->screen = new screen($chapterCode, $currentScreen);
        }
        public function getScreenType(){
            return $this->screen->getScreenType();
        }
        public function getDialogue(){
            return $this->screen->getDialogue();
        }
        public function getCharacter() {
            return $this->screen->getCharacter();
        }
        public function getCharacterName() {
            return $this->screen->getCharacterName();
        }
        public function getBackground() {
            return $this->screen->getBackground();
        }
        public function getBackgroundColor() {
            return $this->screen->getBackgroundColor();
        }
        public function getAnswers() {
            return $this->screen->getAnswers();
        }
        public function getHelp() {
            return $this->screen->getHelp();
        }
    }

?>