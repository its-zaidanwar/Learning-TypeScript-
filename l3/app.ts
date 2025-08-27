// UNION 
// LITERAL TYPES
// TYPE ALISA / CUSTOM TYPES

// ------UNION---------

// UNION  |  -> PIPE IN TS 

// function combine(num1: number | string  ,  num2: number |  string){ // we can add boolean as well. 
//     let result;
//     if(typeof num1 === "number" && typeof  num2 === "number"){
        
//        result =  num1 + num2;
//     } else{
//         result = num1.toString()  + num2.toString();
//     }
//     return result;
// }

// const num = combine(10 , 20);
// const str = combine("Zaid" , " Anwar");

// console.log(num , str);

//------------LIITERAL TYPES--------------

// function combine(num1: number | string  ,  num2: number |  string, conversionType: "as-number" | "as-string"){ // we can add boolean as well. 
//     let result;
//     if(typeof num1 === "number" && typeof  num2 === "number" || conversionType === "as-number"){
        
//        result =  +num1 + +num2;
//     } else{
//         result = num1.toString()  + num2.toString();
//     }
//     return result;
// }

// const num = combine("20" , 80 , "as-number");
// // const str = combine("Zaid" , " Anwar" , "as-string");

// console.log(num);

//--------------TYPE ALISA / CUSTOM TYPES---------------------

type Combinable = number | string | boolean |  string[]; // in this type of cases where we have multiles types we use  this cuz it will be less compicated  
type  ConversionType = "as-number" | "as-string";
function combine(num1: Combinable ,  num2: Combinable , conversionType: ConversionType){ // we can add boolean as well. 
    let result;
    if(typeof num1 === "number" && typeof  num2 === "number" || conversionType === "as-number"){
        
       result =  +num1 + +num2;
    } else{
        result = num1.toString()  + num2.toString();
    }
    return result;
}

const num = combine("20" , 80 , "as-number");
// const str = combine("Zaid" , " Anwar" , "as-string");

console.log(num);

type User = {
    name: string;
    age:  number;
    skills: string[];
}

const  user:User  = {
    name: "zaid",
    age:21,
    skills:["React" , "Next js"]
}

function greet(user:User){
    console.log(`HI, I am ${user.name}`);
    
}
greet(user)

//we can also use innterface insted of type.

// interface user  {
//     name: string;
//     age:  number;
//     skills: string[];
// }

// const  user = {
//     name: "zaid",
//     age:21,
//     skills:["React" , "Next js"]
// }
