"use strict";
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.secondLang = "Javascript";
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, Iam am ${this.name} and ${this.age} years old. `;
    }
}
const Suyash = new Coder("Suyash", "Hip-Hop", 19);
// console.log(Suyash.getAge())
// console.log(Suyash.name);
// console.log(Suyash.age); 
// console.log(Suyash.lang);
// console.log(Suyash.secondLang);
class Webdev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `${this.lang}`;
    }
}
const Sanika = new Webdev("Mac", "Sanika", "Taylor Swift", 17);
class guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    plays(action) {
        return `${this.name} ${action} the ${this.instrument} `;
    }
}
const Suyash1 = new guitarist("Suyash", "Guitar");
console.log(Suyash1.plays("Strums"));
