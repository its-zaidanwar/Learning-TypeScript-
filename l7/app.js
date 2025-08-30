// --------Type Guard--------
function abc(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(abc(20, 30));
var emp1 = {
    name: "zaid",
    privilages: ['create-server'],
    startDate: new Date
};
function printEmployeeInformation(emp) {
    console.log("name -> ", emp.name);
    if ('privilages' in emp) {
        console.log(emp.privilages);
    }
    if ('startDate' in emp) {
        console.log(emp.startDate);
    }
}
printEmployeeInformation(emp1);
printEmployeeInformation({ name: "Aman", startDate: new Date(), privilages: ["read"] });
// Example 3
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("driving  a car.....");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a Truck");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loaading cargo -> ", amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehical(vehicle) {
    vehicle.drive();
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(10);
    }
}
useVehical(v1);
useVehical(v2);
// Type Casting / Type Assertion
// const userInput = <HTMLInputElement>document.getElementById("type-input")!; both can be done
var userInput = document.getElementById("type-input");
userInput.value = "hi there";
