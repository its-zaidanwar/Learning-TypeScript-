"use strict";
// ------CLASS------
// class  Departmnet {
//     name: string;
//     constructor(n: string){
//         this.name =  n; // constructor
//     }
//     describe(this:Departmnet){
//         console.log("Department" , this.name)
//     }
// }
// const accounting = new Departmnet("Accounting"); //object
// accounting.describe()
// -----COPY-------
// const  accountingCopy = {
//     name: "dummy",
//     describe : accounting.describe
// }
// accountingCopy.describe();
// -----PRIVATE , PUBLIC ACCESS  MODYFIERS
// class  Departmnet {
//     private name: string; //  name: string = "zaid"; could  have also initalise this one like this.
//     // employee : string[] = [] //initalise with an empty array 
//     constructor(n: string  , private employee: string[]){ // we can insatlise the employee like this  aswell isndie the constructor
//         this.name =  n; 
//         this.employee = []; 
//     }
//     describe(this:Departmnet){
//         console.log("Department" , this.name)
//     }
//     addEmployee(emp:  string){
//         this.employee.push(emp);
//     }
//     printEmployeeInformation(){
//         console.log('Number of emp:' ,  this.employee.length)
//         console.log(this.employee);
//     }
// }
// const accounting = new Departmnet("Accounting"); 
// accounting.describe();
// accounting.addEmployee("zaid");
// accounting.addEmployee("harash");
// accounting.addEmployee("ankit");
// accounting.printEmployeeInformation();
// class  Departmnet2 {
//     name2: string; //  name: string = "zaid"; could  have also initalise this one like this.
//     employee : string[]; //initalise with an empty array 
//     private readonly id : string;
//     constructor(n: string ){ // we can insatlise the employee like this  aswell isndie the constructor
//         this.name2 =  n; 
//         this.id = "d1"
//         this.employee = []; 
//     }
//     describe(this:Departmnet){
//         console.log("Department" , this.name2)
//     }
//     addEmployee(emp:  string){
//         this.employee.push(emp);
//     }
//     printEmployeeInformation(){
//         console.log('Number of emp:' ,  this.employee.length)
//         console.log(this.employee);
//     }
// }
// const accounting2 = new Departmnet2("Accounting"); 
// accounting.describe();
// accounting.addEmployee("zaid");
// accounting.addEmployee("harash");
// accounting.addEmployee("ankit");
// accounting.printEmployeeInformation();
// ---------------INHERITENCE--------------------
class Departmnet {
    constructor(n) {
        this.employee = []; //initalise with an empty array 
        this.name = n;
        this.employee = [];
    }
    describe() {
        console.log("Department", this.name);
    }
    addEmployee(emp) {
        this.employee.push(emp);
    }
    printEmployeeInformation() {
        console.log('Number of emp:', this.employee.length);
        console.log(this.employee);
    }
}
const accounting = new Departmnet("Accounting");
accounting.describe();
accounting.addEmployee("zaid");
accounting.addEmployee("harash");
accounting.addEmployee("ankit");
accounting.printEmployeeInformation();
class AccountingDepartment extends Departmnet {
}
const accdep = new AccountingDepartment("Accounting");
accdep.describe();
