"use strict";
/*eslint-disable*/
function enhancedIncludes(arr, searchValue) {
    let resultSearch = [];
    resultSearch[0] = arr.includes(searchValue);
    resultSearch[1] = arr.indexOf(searchValue);
    resultSearch[2] = arr.lastIndexOf(searchValue);
    return resultSearch;
}
console.log(enhancedIncludes([1, 2, 1, 1, 2, 3, 4], 1));