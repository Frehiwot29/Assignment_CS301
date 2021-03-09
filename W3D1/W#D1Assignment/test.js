"use strict";

let car = {};
car.name = "Toyota",
    car.model = "camry",
    console.log(car);
car.model = "Rav4";
console.log(car.model);
delete car.name;
console.log(car);
/**
 * 
 * @param {String} str to check
 * @return {String} return str
 */
function checkSpam(str) {
    let result;
    let resultStr = str.toLowerCase();
    if (resultStr.includes("lottory") || resultStr.includes("prize")) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

console.log(checkSpam("i get a\"prize\"because i won \"lottory\" "));
console.log(checkSpam("i get a it because i won it "));
let familyOfKassa = {
    fName: "Adonay",
    lName: "Kassa",
    age: 5,
    salary: 12000
};
/**
 * 
 * @param {object} obj to
 * @return {number} count
 */
function countProperty(obj) {
    let count = 0;
    for (let fam in obj) {
        if (obj.hasOwnProperty(fam)) {
            count++;
        }
    }
    return count;
}
console.log(countProperty(familyOfKassa));
/**
 * 
 * @param {String} str1 to pull over suff
 * @param {String} str2 to pull over suff
 * @return {String} the suffex of the two string
 */
function commonSuffex(str1, str2) {
    let suffex = "";
    let count = 0;
    let length1 = str1.length - 1;
    let length2 = str2.length - 1;
    while (true) {
        if (str1[length1 - count] === str2[length2 - count]) {
            suffex = str1[length1 - count] + suffex;
            count++;
        } else {
            break;
        }
    }
    return suffex;
}
console.log(commonSuffex("swiming", "walking"));
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
module.exports = { titleCase, commonSuffex, countProperty, checkSpam };