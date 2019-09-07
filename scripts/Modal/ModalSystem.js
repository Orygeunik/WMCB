/*jshint esversion: 6 */
/*jshint node: true */
"use strict";

var modalWindow;
var modalWindowContentParagraph;

function initModalWindowSystem() {
    modalWindow = document.getElementById("descriptionModalWindow");
    const modalWindowCloseDummy = document.getElementById("descriptionModalWindowCloseDummy");

    modalWindowContentParagraph = document.querySelector(".modalWindowContent p");

    linkEventTo(modalWindowCloseDummy, "click", closeModalWindow);
    linkEventTo(window, "click", closeModalWindow);
}

function openModalWindow(textInModalWindow) {
    modalWindowContentParagraph.textContent = textInModalWindow;
    modalWindow.style.display = "block";
}

function closeModalWindow() {
    modalWindow.style.display = "none";
}