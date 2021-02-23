const prompt = require("prompt-sync")();
let beginingOdo = parseFloat(prompt("Enter the begining odometer: "));
let endingOdo = parseFloat(prompt("Enter the End odometer value: "));
let usedGas=parseFloat(prompt("Enter the gas by galon: "));
let mileage_per_galon = (endingOdo - beginingOdo)/usedGas;
console.log(mileage_per_galon + "mpg");
