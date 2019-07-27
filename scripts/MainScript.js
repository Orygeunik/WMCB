/*jshint esversion: 6 */

function setEmptyPoint(imgElement) {
    "use strict";

    if (!imgElement) {
        return;
    }

    imgElement.src = "images/EmptyPoint.png";
    imgElement.alt = "EmptyPoint";
}

function setFillPoint(imgElement) {
    "use strict";

    if (!imgElement) {
        return;
    }

    imgElement.src = "images/FillPoint.png";
    imgElement.alt = "FillPoint";
}

function changePointState(imgElement) {
    "use strict";

    if (!imgElement) {
        return;
    }

    if (imgElement.src.indexOf("images/FillPoint.png") !== -1) {
        setEmptyPoint(imgElement);
    } else if (imgElement.src.indexOf("images/EmptyPoint.png") !== -1) {
        setFillPoint(imgElement);
    }

}

function getSidePoints(imgElement) {
    "use strict";

    if (!imgElement) {
        return;
    }

    let parentElement = imgElement.parentElement;

    if (!parentElement) {
        return;
    }

    let listOfChild = parentElement.getElementsByTagName("IMG");

    if (!listOfChild || listOfChild.length === 0) {
        return;
    }

    for (let index = 0; index < listOfChild.length; index++) {
        console.log(listOfChild[index]);
    }

}

function clickHandling(targetElement) {
    "use strict";

    if (!targetElement) {
        return;
    }

    if (targetElement.tagName === "IMG") {
        getSidePoints(targetElement);
        changePointState(targetElement);
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

function tuningDocument() {
    let divs = document.getElementsByClassName("pointContainer");

    for (let index = 0; index < divs.length; index++) {
        addImages(divs[index], divs[index].dataset.elementCount);
    }
}