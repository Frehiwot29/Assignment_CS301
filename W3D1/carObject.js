"use strict";

let car = {};
car.name = "Toyota",
    car.model = "camry",
    console.log(car);
car.model = "Rav4";
console.log(car.model);
delete car.name;
console.log(car);