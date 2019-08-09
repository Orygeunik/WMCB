/*jshint esversion: 6 */
/*jshint node: true */
"use strict";

function revertDocument() {

    let selectsToPrepress = document.getElementsByTagName("SELECT");
    for (let index = 0; index < selectsToPrepress.length; index++) {
        revertPlaceholder(selectsToPrepress[index]);
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