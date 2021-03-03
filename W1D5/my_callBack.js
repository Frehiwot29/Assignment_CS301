//callBack function
function compute(result) {
    console.log(`Result of the calculation is ${result}`);
}
function mySum(num1, num2, myCallback) {
    let add = num1 + num2;
    myCallback(add);
}
mySum(2, 3, compute);



