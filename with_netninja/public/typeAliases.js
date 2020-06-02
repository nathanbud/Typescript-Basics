"use strict";
var loginDetails = function (uid) {
    return uid;
};
var greet = function (user) {
    console.log("Hi, Welcome " + user.name);
};
greet({ name: "Nsat", uid: "12" });
