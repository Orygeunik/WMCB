/*jshint esversion: 6 */

function TryParseInt(str, defaultValue) {
    "use strict";

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