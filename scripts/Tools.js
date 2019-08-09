/*jshint esversion: 6 */
/*jshint node: true */
"use strict";

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