"use strict";
/**
 * 
 * @param {number } num to compare
 * @return {number} number digiting
 */
function countDigit(num) {

    if (num === 0) {
        return 0;

    } else if (num === 1) {

        return 1;
    } else {
        return 1 + countDigit(Math.floor(num / 10));
    }
}
console.log(countDigit(62663));