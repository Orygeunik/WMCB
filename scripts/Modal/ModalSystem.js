/*jshint esversion: 6 */
/*jshint node: true */
"use strict";

var modalWindow;
var modalWindowContentParagraph;
var modalWindowCloseDummy;

function initModalWindowSystem() {
    modalWindow = document.getElementById("descriptionModalWindow");
    modalWindowCloseDummy = document.getElementById("descriptionModalWindowCloseDummy");

    modalWindowContentParagraph = document.querySelector(".modalWindowContent p");

    linkEventTo(modalWindowCloseDummy, "click", closeModalWindow);
    linkEventTo(window, "click", closeModalWindow);
}

function openModalWindow(textInModalWindow) {
    modalWindowContentParagraph.innerText = textInModalWindow;
    modalWindow.style.display = "block";
}

function closeModalWindow() {
    if (event.target === modalWindow || event.target === modalWindowCloseDummy) {
        modalWindow.style.display = "none";
    }
}