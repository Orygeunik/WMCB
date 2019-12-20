/*jshint esversion: 6 */
/*jshint node: true */
"use strict";

function printSetup() {

    if (window.matchMedia) {
        let mediaQueryList = window.matchMedia("print");
        mediaQueryList.addListener(function(mql) {
            if (mql.matches) {
                prepareDocument();
            } else {
                revertDocument();
            }
        });
    }

    window.onbeforeprint = prepareDocument;
    window.onafterprint = revertDocument;
}

function prepareDocument() {

    let selectsToPrepress = document.getElementsByTagName("SELECT");
    for (let index = 0; index < selectsToPrepress.length; index++) {
        removePlaceholder(selectsToPrepress[index]);
    }
}

function revertDocument() {

    let selectsToPrepress = document.getElementsByTagName("SELECT");
    for (let index = 0; index < selectsToPrepress.length; index++) {
        revertPlaceholder(selectsToPrepress[index]);
    }
}

function removePlaceholder(element) {

    if (!element || element.tagName !== "SELECT") {
        return;
    }

    if (element.selectedOptions.length === 0) {
        return;
    }

    let selectedElement = element.selectedOptions[0];

    if (!selectedElement) {
        return;
    }

    if (selectedElement.value === "Empty") {
        selectedElement.textContent = "";
    }

}

function revertPlaceholder(element) {

    if (!element || element.tagName !== "SELECT") {
        return;
    }

    if (element.selectedOptions.length === 0) {
        return;
    }

    let selectedElement = element.selectedOptions[0];

    if (!selectedElement) {
        return;
    }

    if (selectedElement.value === "Empty") {
        selectedElement.textContent = "Пусто";
    }

}