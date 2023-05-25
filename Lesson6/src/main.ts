class Coder {

    secondLang : string = "Javascript"

    constructor(
        public readonly name:string, 
        public music: string, 
        private age: number, 
        protected lang: string = "Typescript"
    ){
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, Iam am ${this.name} and ${this.age} years old. `
    }
}

const Suyash :Coder = new Coder("Suyash", "Hip-Hop", 19 ) as Coder
// console.log(Suyash.getAge())
// console.log(Suyash.name);
// console.log(Suyash.age); 
// console.log(Suyash.lang);
// console.log(Suyash.secondLang);


class Webdev extends Coder {
    constructor(
        public computer:string,
        name: string,
        music: string,
        age: number,       
        ){
        super(name,music,age)
        this.computer = computer
    }
    public getLang(){
        return `${this.lang}`
    }
}

const Sanika = new Webdev("Mac", "Sanika", "Taylor Swift" ,17)

// console.log(Sanika.getLang());

type Musician = {
    name: string,
    instrument : string,
    plays(action: string): string
}

class guitarist implements Musician {
    constructor(
        public name: string,
        public instrument: string
    ){
        this.name = name
        this.instrument = instrument
    }
    plays(action: string){
        return `${this.name} ${action} the ${this.instrument} `
    }
} 

const Suyash1 = new guitarist("Suyash", "Guitar")
console.log(Suyash1.plays("Strums"));
