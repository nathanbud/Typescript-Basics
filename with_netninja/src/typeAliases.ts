type StringOrNum = string | number;
type ObjectWithName = {name: string, uid: StringOrNum };

const loginDetails = (uid:StringOrNum) =>{
    return uid
}

const greet = (user:ObjectWithName) =>{
    console.log(`Hi, Welcome ${user.name}`);
}

greet({name:"Nsat", uid: "12" } );

