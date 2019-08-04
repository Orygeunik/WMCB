/*jshint esversion: 6 */

function isFillPoint(imgElement) {
    "use strict";

    return (imgElement.src.indexOf("images/FillPoint.png") !== -1);
}

function isEmptyPoint(imgElement) {
    "use strict";

    return (imgElement.src.indexOf("images/EmptyPoint.png") !== -1);
}

function setEmptyPoint(imgElement) {
    "use strict";

    if (!imgElement || imgElement.tagName !== "IMG") {
        return;
    }

    if (isEmptyPoint(imgElement)) {
        return;
    }

    imgElement.src = "images/EmptyPoint.png";
    imgElement.alt = "EmptyPoint";
}

function setFillPoint(imgElement) {
    "use strict";

    if (!imgElement || imgElement.tagName !== "IMG") {
        return;
    }

    if (isFillPoint(imgElement)) {
        return;
    }

    imgElement.src = "images/FillPoint.png";
    imgElement.alt = "FillPoint";
}

function changePointState(imgElement) {
    "use strict";

    if (!imgElement || imgElement.tagName !== "IMG") {
        return;
    }

    if (isFillPoint(imgElement)) {
        setEmptyPoint(imgElement);
    } else if (isEmptyPoint(imgElement)) {
        setFillPoint(imgElement);
    }

}

function changeSidePoints(parentElement, clickedElement) {
    "use strict";

    if (!parentElement) {
        return;
    }

    if (!clickedElement) {
        return;
    }

    let listOfChild = parentElement.getElementsByTagName("IMG");

    if (!listOfChild || listOfChild.length === 0) {
        return;
    }

    var clickedElementIndex = -1;

    for (let index = 0; index < listOfChild.length; index++) {
        if (listOfChild[index] === clickedElement) {
            clickedElementIndex = index;
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
    "use strict";

    if (!targetElement) {
        return;
    }

    if (targetElement.tagName === "DIV") {

        const clickedElement = document.elementFromPoint(event.clientX, event.clientY);

        if (clickedElement.tagName !== "IMG") {
            return;
        }

        changeSidePoints(targetElement, clickedElement);
    }

}

function addImages(rootElement, elementCount) {
    "use strict";

    if (!rootElement || rootElement.tagName !== "DIV") {
        return;
    }

    if (!elementCount) {
        return;
    }

    const intElementCount = TryParseInt(elementCount, 0);

    for (let i = 0; i < intElementCount; i++) {
        let element = document.createElement("IMG");
        setEmptyPoint(element);
        rootElement.appendChild(element);
    }

}

function addOptions(element, optionArray) {
    "use strict";

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
        addImages(divs[index], divs[index].dataset.elementCount);
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