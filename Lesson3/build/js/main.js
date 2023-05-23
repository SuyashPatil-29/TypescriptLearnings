"use strict";
let stringArray = ["one", "hey", "Suyash"];
let stringAndNumber = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
let test = [];
let testWithType = [];
//tuple
let tupleArray = ["Suyash", 29, true];
//Object 
let myObj;
myObj = {};
// console.log(typeof myObj);
let exampleObject = {
    name: "Suyash",
    age: 19
};
const eddie = {
    name: "Eddie",
    albums: [1984, 5150, "OU812"]
};
const eddie2 = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"]
};
// console.log(eddie == eddie2 ? true : false);
const greetGutarist = (guitarist) => {
    return `${guitarist.name}`;
};
console.log(greetGutarist(eddie));
