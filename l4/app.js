//FUNCTIONS
//--------FUNCTIONS RETURN TYPE---------
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 20));
function greet(name) {
    console.log("hi, i am ".concat(name)); // we are using void here because our fucntion is not returning anything.
    // if it was returning like -> return (`hi, i am ${name}`) then  insted of void we could have used string.
}
//BAD PRACTICE
// let combinefunction : Function;
//combinefunction  = 10; //inavalid
//combinefunction = function(){}; valiad
// combinefunction = add; //valaid
// combinefunction = greet;  // valiad;
// console.log(combinefunction(1,2));
//GOOD PRACTICE
var combinefunction; //parameter name can be anything
combinefunction = add;
console.log(combinefunction(100, 200));
function addhandler(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addhandler(10, 50, function (result) {
    console.log(result);
});
