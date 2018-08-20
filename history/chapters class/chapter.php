<?php
    class chapter {
        private $screen = array();
            function getScreen(){return $this->screens;}
            function setScreen($screen){$this->screens = $screen;}
        private $currentScreen;
            function getCurrentScreen(){return $this->currentScreen;}
            function setCurrentScreen($currentScreen){$this->currentScreen = $currentScreen;}
        private $name;
            function getName(){return $this->name;}
            function setName($name){$this->name = $name;}

            public function __construct($name, $currentScreen)
            {
                $this->name = $name;
                $this->currentScreen = $currentScreen;
                //Tal vez sea bueno crear una instancia de screen justo acá
            }
    }

?>