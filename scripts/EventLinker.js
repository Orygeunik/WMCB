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