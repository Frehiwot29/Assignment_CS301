"use strict";
/**
 * @param {array} array to check paliondrom
 * @return {boolean} true or false 
*/
function isPalindrome(array) {
    let str = String(array);
    let i = 0;
    let j = str.length - 1;
    let status;
    while (i < j) {
        if (str[i] === str[j]) {
            i++;
            j--;
            status = true;
        } else {
            status = false;
        }
        return status;
    }

}

// let findPalindrome = (arr) => {
//     return arr.filter(array => isPalindrome(array));
// };
let arr = ["carac", 13431, 12321, "did", "madam"];
console.log(isPalindrome(arr));