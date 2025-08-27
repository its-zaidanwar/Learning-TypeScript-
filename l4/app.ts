//FUNCTIONS

//--------FUNCTIONS RETURN TYPE---------

function add(num1: number , num2: number): number{
    return num1 + num2;
}

console.log(add(10 , 20));

function greet(name: string) : void {
    console.log(`hi, i am ${name}`) // we are using void here because our fucntion is not returning anything.

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
let combinefunction :  (a: number , b: number) => number //parameter name can be anything
combinefunction = add;
console.log(combinefunction(100,200));

// type CB = (n: number) => void we can do this aswell 
function addhandler(num1 : number , num2: number, cb:(n: number)=> void ){ // insted of this whole thing  cb:(n: number)=> void we can simply write CB
    const result = num1 + num2;
    cb(result);
}

addhandler(10 , 50 , (result: number)=> { // we can and cannnot  : nnumber here but if we want  that in  result only number shoud be there theen thsi is imp.
    console.log(result);  
})



