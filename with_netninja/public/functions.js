"use strict";
//Explicit 
var add = function (a, b) { return a + b; };
console.log(add(3, 5));
//OPTIONAL "?"
var myname = function (firstName, lastName, middleName) {
    return "My name is " + firstName + " " + middleName + " " + lastName + ". Hehehe";
};
//DEFAULT "="
var thename = function (firstName, lastName, middleName) {
    return "My name is " + firstName + " " + middleName + " " + lastName + ". Hehehe";
};
//MIXED 
var address = function (place, province) {
    if (province === void 0) { province = 'Benguet'; }
};
console.log(myname('Nathan', 'Bud'));
console.log(thename('Nathan', 'Bud'));
console.log(address('Gusaran'));
