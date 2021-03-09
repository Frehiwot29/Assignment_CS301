"use strict";
/**
 * 
 * @param {String} str to
 * @return {String} str 
 */
function titleCase(str) {
    let strName = str.split("");
    for (let i = 0; i < strName.length; i++) {
        strName[i] = strName[i][0].toUpperCase() + strName[i].substring(i);
    }
    return strName.join(" ");

}
console.log(titleCase("rtt fggh bnn"));