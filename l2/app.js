//object  , array , tuble , enum.
//-------object and nested object------
// const person: {
//     firstName: string;
//     age:  number;
//     xyz:{
//         address:string;
//     }
// } = {
//   firstName: "patel",
//     age: 22,
//     xyz:  {  //nested  object
//         address: "India",
//     }
// }
//-------array and tuble------
// const person : {
//     firstName: string;
//     age:  number;
//     hobbies: string[]; // array of string
//     role: [number, string]; // tuple
// } = {
//     firstName: "patel",
//     age: 22,
//     hobbies: ["sports", "cooking"],
//     role: [2, "author"], // tuple
// };
var favouriteLanguages;
favouriteLanguages = ["Hindi", "English"]; // since we defined it as string array so we can only add string in it.
// favouriteLanguages = [1,2] // error. in case we want to  add number then we have to define it as (string | number)[]
var favouriteNumbers1;
favouriteNumbers1 = [100, "cat"]; // we can use any  as well to write anything in the array but this is not a good practice  since we lose the purpose of using type scrip. 
var favouriteNumbers2;
favouriteNumbers2 = [1, "hello"]; // this is a good practice  
// console.log(person);
//---------tuple------------
var example = {
    name: "zaid",
    age: 21,
    skills: ["coading", "video Editing"],
    products1: [1, "macbook pro", 3],
    products2: [1, "apple", 5, "banana", true]
};
example.products1[0] = 90; // over here we can  only change the vaariables that  have same type.  throw error 
example.products2[1] = 1000; // over here we an change and  inatalise anyy thing in any type. works
console.log(example.products1[0]);
console.log(example.products2[1]);
//---------enum-------------
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_USER_ONLY"] = 2] = "READ_USER_ONLY";
})(Role || (Role = {}));
;
var person = {
    name: "patel",
    age: 21,
    skills: ["React", "Node"],
    product: [10, "Macbook Air M2"],
    role: Role.READ_USER_ONLY
};
if (person.role === Role.AUTHOR) {
    console.log("Author");
}
else if (person.role === Role.ADMIN) {
    console.log("Admin");
}
else if (person.role === Role.READ_USER_ONLY) {
    console.log("read user only");
}
