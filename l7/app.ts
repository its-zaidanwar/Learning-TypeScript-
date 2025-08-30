// --------Type Guard--------

type Combinamble  = string | number;
type Numeric = number | boolean;

type Universal =  Combinamble & Numeric; 

function abc(a:Combinamble , b:Combinamble){

    if(typeof a === "string" || typeof b  === "string"){
        return a.toString() + b.toString();
    }
  return a+b;
}

console.log(abc(20, 30));

//example 2

type Admin = {
    name: string;
    privilages: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin  & Employee;
type unknownEmployee =  Admin | Employee;

const emp1 : ElevatedEmployee = {
    name : "zaid",
    privilages: ['create-server'],
    startDate: new Date
}

function printEmployeeInformation(emp : unknownEmployee){
    console.log("name -> " , emp.name);
    

    if('privilages' in  emp){
        console.log(emp.privilages);  
    }

    if('startDate' in emp){
        console.log(emp.startDate);
        
    }
}

printEmployeeInformation(emp1)
printEmployeeInformation({name: "Aman" , startDate:new Date() , privilages: ["read"]});

// Example 3

class Car{
    drive(){
        console.log("driving  a car.....");
    }
}

class Truck{
    drive(){
        console.log("Driving a Truck");
    }
    loadCargo(amount : number){
        console.log("Loaading cargo -> " , amount);
    }
}

type vehical = Car | Truck;

const v1 = new Car();
const v2 =  new Truck();



function useVehical(vehicle : vehical ){
    vehicle.drive();
    if('loadCargo' in vehicle){
        vehicle.loadCargo(10);
    }
}
useVehical(v1);
useVehical(v2);

// Type Casting / Type Assertion

// const userInput = <HTMLInputElement>document.getElementById("type-input")!; both can be done
const userInput = document.getElementById("type-input") as HTMLInputElement;
userInput.value = "hi there";



