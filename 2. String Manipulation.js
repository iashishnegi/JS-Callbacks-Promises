/*2. String Manipulation.
Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along with the manipulated string or the new string to the console.*/

function manipulateString(string , callback){

    let result = string.toUpperCase();
    return callback(result);

}

function logString(value){
    console.log(`The manipulated string is : ${value}`)
}

manipulateString("hello, world!", logString);
manipulateString("lorem ipsum dolor ", logString);
manipulateString("heya ! whats up people? lets start - coding !", logString);
