var userInput;
var userName;
var userinput;
// userName = userInput; this line will throw an errror because we cannot  asssine anytthing in unknown like that.
// userName = userinput; this is valaid.
if (typeof userInput === "string") {
    userName = userInput; // so if we want to do this then we have to write a condition like this 
}
//------------NEVER RETURN TYPE-----------------
function generateError(message, code) {
    throw { message: message, statusCode: code };
}
var res = generateError("Internal server error", 500);
console.log(res);
