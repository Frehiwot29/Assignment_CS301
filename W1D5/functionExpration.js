// function expration 
let compute = function (result) {
    console.log(`Result of the calculation is ${result}`);
}
let mySum = function (num1, num2, myCallback) {
    let add = num1 + num2;
    myCallback(add);
}
mySum(2, 3, compute);
