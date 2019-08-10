/*jshint esversion: 6 */
/*jshint node: true */
"use strict";
var runtimeCheckboxIDCounter = 0;

function setEmptyPoint(inputElement) {

    if (!inputElement || (inputElement.tagName !== "INPUT" && inputElement.type === "checkbox")) {
        return;
    }

    if (!inputElement.checked) {
        return;
    }

    inputElement.checked = false;
}

function setFillPoint(inputElement) {

    if (!inputElement || (inputElement.tagName !== "INPUT" && inputElement.type === "checkbox")) {
        return;
    }

    if (inputElement.checked) {
        return;
    }

    inputElement.checked = true;
}

function changePointState(inputElement) {

    if (!inputElement || (inputElement.tagName !== "INPUT" && inputElement.type === "checkbox")) {
        return;
    }

    if (inputElement.checked) {
        inputElement.checked = false;
    } else if (!inputElement.checked) {
        inputElement.checked = true;
    }

}

function changeSidePoints(parentElement, clickedElement) {

    if (!parentElement) {
        return;
    }

    if (!clickedElement) {
        return;
    }

    let listOfChild = parentElement.getElementsByTagName("INPUT");

    if (!listOfChild || listOfChild.length === 0) {
        return;
    }

    var clickedElementIndex = -1;

    for (let index = 0; index < listOfChild.length; index++) {
        if (listOfChild[index].id === clickedElement.htmlFor) {
            clickedElementIndex = index;
            break;
        }
    }

    if (clickedElementIndex === -1) {
        return;
    }

    changePointState(listOfChild[clickedElementIndex]);

    for (let index = 0; index < listOfChild.length; index++) {
        if (index < clickedElementIndex) {
            setFillPoint(listOfChild[index]);
        } else if (index === clickedElementIndex) {
            continue;
        } else {
            setEmptyPoint(listOfChild[index]);
        }
    }
}

function clickHandling(targetElement) {

    if (!targetElement) {
        return;
    }

    if (targetElement.tagName === "DIV") {

        const clickedElement = document.elementFromPoint(event.clientX, event.clientY);

        if (clickedElement.tagName !== "LABEL") {
            return;
        }

        changeSidePoints(targetElement, clickedElement);
    }

}

function addInputPoints(rootElement, elementCount) {

    if (!rootElement || rootElement.tagName !== "DIV") {
        return;
    }

    if (!elementCount) {
        return;
    }

    const intElementCount = TryParseInt(elementCount, 0);

    for (let i = 0; i < intElementCount; i++) {
        let element = document.createElement("input");
        element.type = "checkbox";
        element.id = "runtimeCheckboxID_" + runtimeCheckboxIDCounter;
        element.classList.add("pointCheckbox");

        let label = document.createElement("label");
        label.htmlFor = "runtimeCheckboxID_" + runtimeCheckboxIDCounter;

        rootElement.appendChild(element);
        rootElement.appendChild(label);

        runtimeCheckboxIDCounter++;
    }

}

function addOptions(element, optionArray) {

    if (!element || element.tagName !== "SELECT") {
        return;
    }

    if (!optionArray || !Array.isArray(optionArray)) {
        return;
    }

    element.options.length = 0;


    for (let i = 0; i < optionArray.length; i++) {
        const opt = optionArray[i];
        let el = document.createElement("option");
        el.textContent = opt.text;
        el.disabled = opt.disabled;
        el.selected = opt.selected;
        if (opt.value) {
            el.value = opt.value;
        }
        element.appendChild(el);
    }
}

function tuningDocument() {

    let divs = document.getElementsByClassName("pointContainer");
    for (let index = 0; index < divs.length; index++) {
        addInputPoints(divs[index], divs[index].dataset.elementCount);
    }

    let selectsAdvantagesDisadvantages = document.getElementsByClassName("advantagesDisadvantagesOptionSelect");
    for (let index = 0; index < selectsAdvantagesDisadvantages.length; index++) {
        addOptions(selectsAdvantagesDisadvantages[index], advantagesDisadvantagesOptions);
    }

    let characterSelector = document.getElementById("characterClan");
    addOptions(characterSelector, characterClansOptions);

    let selectsAdditions = document.getElementsByClassName("additionsOptionSelect");
    for (let index = 0; index < selectsAdditions.length; index++) {
        addOptions(selectsAdditions[index], additionsOptions);
    }

    let selectsDisciplines = document.getElementsByClassName("disciplinesOptionSelect");
    for (let index = 0; index < selectsDisciplines.length; index++) {
        addOptions(selectsDisciplines[index], disciplinesOptions);
    }
}