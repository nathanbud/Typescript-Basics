
//Explicit 
const add = (a:number, b:number) => a + b; 
console.log(add(3, 5));

//OPTIONAL "?"
const myname = (firstName: string, lastName: string, middleName?: string) =>{
    return `My name is ${firstName} ${middleName} ${lastName}. Hehehe`
}



//DEFAULT "="
const thename = (firstName: string, lastName: string, middleName?: string) =>{
    return `My name is ${firstName} ${middleName} ${lastName}. Hehehe`
}

//MIXED 
const address = (place: number | string, province: String = 'Benguet' ):void =>{
   

}



console.log(myname('Nathan', 'Bud'));
console.log(thename('Nathan', 'Bud'));
console.log(address('Gusaran'));