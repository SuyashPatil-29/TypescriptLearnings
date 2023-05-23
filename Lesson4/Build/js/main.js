"use strict";
//Type Aliases
const addAll = (a, b, c) => {
    if (c != undefined)
        return a + b + c;
    return a + b;
};
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
console.log(addAll(2, 3, 2));
console.log(addAll(2, 3));
console.log(sumAll(2, 3, 3));
console.log(sumAll(undefined, 3));
