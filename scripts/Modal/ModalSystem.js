/*jshint esversion: 6 */
/*jshint node: true */
"use strict";

var modalWindow;
var modalWindowContentParagraph;
var modalWindowCloseDummy;
var mainBodyElement;

function initModalWindowSystem() {
    modalWindow = document.getElementById("descriptionModalWindow");
    modalWindowCloseDummy = document.getElementById("descriptionModalWindowCloseDummy");

    modalWindowContentParagraph = document.querySelector(".modalWindowContent p");

    mainBodyElement = document.body;

    linkEventTo(modalWindowCloseDummy, "click", closeModalWindow);
    linkEventTo(window, "click", closeModalWindow);
}

function openModalWindow(textInModalWindow) {
    modalWindowContentParagraph.innerText = textInModalWindow;
    modalWindow.style.display = "block";
    mainBodyElement.style.overflow = "hidden";
}

function closeModalWindow() {
    if (event.target === modalWindow || event.target === modalWindowCloseDummy) {
        modalWindow.style.display = "none";
        mainBodyElement.style.overflow = "visible";
    }
}