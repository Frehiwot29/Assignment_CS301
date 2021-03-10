"use strict";
/*eslint-disable*/
function filterNega(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result.push(arr[i]);
        }
    }
    return result;

}
console.log(filterNega([2, 3, 4, -5, 6, -2]));