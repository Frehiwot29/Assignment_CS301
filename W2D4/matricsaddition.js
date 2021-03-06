"use strict";
/*esLint-disable*/
/**
 * 
 * @param {Array} matr1 to 
 * @param {Array} matr2 to
 * @return {Array} sumMatrics 
 */
function matricsAdd(matr1, matr2) {
    let sumMatrics = [[], []];
    for (let i = 0; i < matr1.length; i++) {
        for (let j = 0; j < matr2[i].length; j++) {
            sumMatrics[i][j] = matr1[j][j] + matr2[i][j];


        }

    }
    return sumMatrics;


}
let martics1 = [[1, 2, 3], [3, 4, 5]];
let martics2 = [[2, 4, 5], [4, 5, 6]];
console.log(matricsAdd(martics1, martics2));