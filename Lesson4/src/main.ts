
//Type Aliases

type stringOrNumber = string | number

type stringOrNumberArr = (string|number)[]

type guitarist = {
    name? : string,
    active? : boolean,
    albums : stringOrNumberArr
}

const addAll = (a:number, b:number, c?:number):number =>{
    if(c!= undefined)
    return a+b+c
    return a+b
}

const sumAll = (a:number=10, b:number, c:number = 2):number =>{
    return a+b+c
}

console.log(addAll(2,3,2));
console.log(addAll(2,3));
console.log(sumAll(2,3,3));
console.log(sumAll(undefined,3));

//Lesson 5

type One = string
type Two = string | number
type Three = "Hello"

//convert tp more or less specific type 

let a :One = "Hello"
let b = a as Two //less specific type 
let c = a as Three
