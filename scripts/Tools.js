/*jshint esversion: 6 */
/*jshint node: true */
"use strict";

/**
 * Линкует указанное событие к указанному объекту с указанным обработчиком.
 * Links selected event to selected object with selected handler.
 *  
 * @param {object} elementToLinkEvent - объект для прилинковывания (object to link event).
 * @param {string} eventType - тип события (type of event).
 * @param {function} eventHandler - функция обработчик (function as handler).
 */
function linkEventTo(elementToLinkEvent, eventType, eventHandler) {

    if (!elementToLinkEvent || !eventType || !eventHandler) {
        return;
    }

    elementToLinkEvent.addEventListener(eventType, eventHandler);
}

function TryParseInt(str, defaultValue) {

    let retValue = defaultValue;
    if (str !== null) {
        if (str.length > 0) {
            if (!isNaN(str)) {
                retValue = parseInt(str, 10);
            }
        }
    }
    return retValue;
}