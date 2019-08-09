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