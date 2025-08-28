let userInput: unknown;
let userName: string;
let userinput: any;

// userName = userInput; ❌ This will cause an error, because a value of type 'unknown' 
// cannot be directly assigned to a variable of type 'string'.

// userName = userinput; ✅ This works fine, because 'any' disables type checking.

// ✅ If we want to assign an 'unknown' value to a string, 
// we must first check its type before assigning.
if (typeof userInput === "string") {
    userName = userInput;
}

//------------ NEVER RETURN TYPE -----------------

function generateError(message: string, code: number): never {
    // The 'never' return type is used for functions that never successfully complete. 
    // In this case, the function always throws an error and never returns a value.
    throw { message: message, statusCode: code };
}

const res = generateError("Internal server error", 500);
console.log(res); 
// This line is actually unreachable, because 'generateError' never returns anything. 
// Instead, it always throws an error.
