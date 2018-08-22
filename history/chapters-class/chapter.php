<?php
require_once "../screen-class/screen.php";

    class chapter {
        private $screen;
            function getScreen(){return $this->screens;}
            function setScreen($screen){$this->screens = $screen;}
        private $chapterCode;
            function getChapterCode(){return $this->chapterCode;}
            function setChapterCode($chapterCode){$this->chapterCode = $chapterCode;}
            private $isCompleted;

        public function __construct($chapterCode, $currentScreen, $isQuestion = false)
        {
            $this->chapterCode = $chapterCode;
            $this->screen = new screen($chapterCode, $currentScreen, $isQuestion);
        }
        public function getDialogue(){
            return $this->screen->getDialogue();
        }
        public function getCharacter() {
            return $this->screen->getCharacter();
        }
        public function getBackground() {
            return $this->screen->getBackground();
        }
        public function getAnswers() {
            return $this->screen->getAnswers();
        }
    }

?>