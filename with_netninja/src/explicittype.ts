let age: number;
let fname: string;

let isLogged:boolean;

//arrays
let subject:[] = [];

//objects
let attributes = {
    class: 'Math',
    section: '4-q',
    year: 12

}

//union types

let mixed:(string|number)[] = [];

let uid: string|number;

//object
let ninjaOne: object;

ninjaOne = {
    name: "Hure",
    age: 30
}

//object (more specific)

let ninjaTwo: {
    name: string,
    age:number,
    beltColor:string
}