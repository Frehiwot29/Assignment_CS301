//arrow function
let compute = (mySum, num1, num2) => {
    return mySum(num1, num2);
}
let mySum = (num1, num2) => {
    return num1 + num2;
}
console.log(compute(mySum, 2, 3));
