// UNION 
// LITERAL TYPES
// TYPE ALISA / CUSTOM TYPES
function combine(num1, num2, conversionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var num = combine("20", 80, "as-number");
// const str = combine("Zaid" , " Anwar" , "as-string");
console.log(num);
var user = {
    name: "zaid",
    age: 21,
    skills: ["React", "Next js"]
};
function greet(user) {
    console.log("HI, I am ".concat(user.name));
}
greet(user);
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
