var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var boy = {
    name: "zaid",
    age: 21
};
// const fruits: Array<string> = [];
var fruits = [{ name: "Harshita", age: 22 }];
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
function merge(objA, objB, objC) {
    return __assign(__assign(__assign({}, objA), objB), objC);
}
var res = merge({ name: "daksh" }, { role: "Video Editor" }, { id: 26 });
// console.log(res);
// 2. Generic Constraints
function createObject(key, value, isActive) {
    return { key: key, value: value, isActive: isActive };
}
;
var obj = createObject("Goku", 25, true);
var numberBox = {
    value: 200,
};
var stringBox = {
    value: "Dummy"
};
var objectBox = {
    value: { text: "this is an object" }
};
console.log(numberBox);
console.log(stringBox);
console.log(objectBox);
var response = { data: "status", status: 200 };
var jsonRes1 = { data: { key: "value" }, status: 500 };
var jsonRes2 = { data: { name: "zaid", age: 21 }, status: 500 };
console.log(response);
console.log(jsonRes1);
console.log(jsonRes2);
// generic with class 
var containeer = /** @class */ (function () {
    function containeer(content) {
        this.content = content;
    }
    containeer.prototype.getContent = function () {
        return this.content;
    };
    return containeer;
}());
var stringContainer = new containeer("hello");
var stringContainer2 = new containeer(100);
console.log(stringContainer.getContent());
console.log(stringContainer2.getContent());
// generic with array 
function getFirst(arr) {
    return arr[0];
}
var firstNumber = getFirst([1, 2, 3, 4]);
var firstString = getFirst(["string  arraay"]);
console.log(firstNumber);
console.log(firstString);
// generic with keyof
// function getProperty(obj : object, key: string){
//   return obj[key];
// }
// const res1 = getProperty({},"name");
// console.log(res1);
function getProperty(obj, key) {
    return obj[key];
}
var person = { name: "patel", age: 21 };
var name1 = getProperty(person, "name");
var age = getProperty(person, "age"); // this is not a string rather the  value  i want to return 
console.log(name1, age);
