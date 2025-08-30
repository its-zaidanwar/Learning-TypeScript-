// ------Generics-----------
type person = {
    name: string;
    age: number;
}

const boy: person = {
    name: "zaid",
    age: 21
}
// const fruits: Array<string> = [];
const fruits: Array<person> = [{ name: "Harshita", age: 22 }];
// fruits.push("mango");
// fruits.push("banana");
// fruits.push("apple");
console.log(fruits);

// example 2

// function merge(objA:object  , objB:object){
//     return  {...objA , ...objB}
// }
// const res = merge({name:"Aakansha"} , {role:"Software Enginner"});
// console.log(res);


function merge<T, U, V>(objA: T, objB: U, objC: V) {
    return { ...objA, ...objB, ...objC }
}
const res = merge({ name: "daksh" }, { role: "Video Editor" }, { id: 26 });
// console.log(res);

// 2. Generic Constraints

function createObject<T extends string, U extends number, V extends boolean>(key: T, value: U, isActive: V) : {key:T , value:U , isActive:V}  {

    return {key , value , isActive};
};

const obj  =  createObject("Goku" , 25 , true);
// console.log(obj);

// Generic inteface

interface Box<T> {
   value: T;
}

const numberBox : Box<number> = {
    value:200,   
}

const stringBox : Box<string> = {
    value:"Dummy"
}

const objectBox:  Box<object> =  {
    value:{text:"this is an object"}
}
console.log(numberBox);
console.log(stringBox);
console.log(objectBox);



// generic default 
interface User<T = string> {
    data: T;
    status: number;
}

type person2 = {
    name:string;
    age:number;
}

const response : User = {data: "status" , status: 200};
const jsonRes1 :  User<object> = {data:{key:"value"} , status:500};
const jsonRes2 :  User<person2> = {data:{name:"zaid"  , age:21} , status:500};

console.log(response);
console.log(jsonRes1);
console.log(jsonRes2);


// generic with class 

class containeer<T> {
    private content : T;
    constructor(content:T){
        this.content = content;
    }
    getContent() : T {
        return this.content;
    }
}

const stringContainer = new containeer<string>("hello");
const stringContainer2 = new containeer<number>(100);
console.log(stringContainer.getContent());
console.log(stringContainer2.getContent());



// generic with array 

function getFirst<T> (arr : T[]) : T {
    return  arr[0];
}

const firstNumber = getFirst([1,2,3,4]);
const firstString = getFirst(["string  arraay"]);

console.log(firstNumber);
console.log(firstString);

// generic with keyof

// function getProperty(obj : object, key: string){
//   return obj[key];
// }
// const res1 = getProperty({},"name");
// console.log(res1);

function getProperty <T extends object , K extends keyof  T>( obj : T , key : K)  : T[K]{
  return obj[key];
}
const person = {name:"patel", age:21};
const name1 = getProperty(person , "name");
const age = getProperty(person , "age"); // this is not a string rather the  value  i want to return 
console.log(name1 , age);
