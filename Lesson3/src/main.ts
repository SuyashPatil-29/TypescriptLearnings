let stringArray = ["one", "hey", "Suyash"]

let stringAndNumber = ["Strat", "Les Paul", 5150]

let mixedData =["EVH", 1984, true]

let test = []

let testWithType: string[] = []

//tuple

let tupleArray :[string,  number, boolean] = ["Suyash", 29, true]

//Object 

let myObj: object
myObj= {}
// console.log(typeof myObj);

let exampleObject = {
    name : "Suyash",
    age : 19
}

interface guitarist {
    name : string,
    active? : boolean 
    albums : (string | number )[]
}

const eddie :guitarist = {
    name: "Eddie",
    albums : [1984, 5150, "OU812"]
}
const eddie2 :guitarist = {
    name: "Eddie",
    active : false,
    albums : [1984, 5150, "OU812"]
}

// console.log(eddie == eddie2 ? true : false);

const greetGutarist = (guitarist:guitarist) =>{
    return `${guitarist.name}`
}

console.log(greetGutarist(eddie));
