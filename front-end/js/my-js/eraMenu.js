function openModal(era) {
    var container = document.getElementById("modal-container");
    container.classList.add("show");
    container.classList.remove("hide");

    container.setAttribute("onclick", "closeModal()");

    var background = document.getElementById("modal-background");
    background.classList.add("show");
    background.classList.remove("hide");
/*
    var button = document.getElementsByClassName("start-game-button");
    button.setAttribute("onclick", "startChapter('" + era + "')");
*/
}

function closeModal() {
    var container = document.getElementById("modal-container");
    container.classList.remove("show");
    container.classList.add("hide");

    container.removeAttribute("onclick");

    var background = document.getElementById("modal-background");
    background.classList.remove("show");
    background.classList.add("hide");
/*
    var button = document.getElementsByClassName("start-game-button");
    button.removeAttribute("onclick");
*/
}