/*5. Greeting Promise.
You need to write a function that takes a name as input and returns a promise that resolves with a greeting
message. The function should greet the person using their name, with a message in the format "Hello, {name}!".
For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!". */

function greet(name){
    return new Promise(function(resolve , reject){
        if(typeof name === "string"){
            resolve(name);
        }
        else{
            reject("Please input the correct name in string format")
        }
    })

    .then( function (name){
            console.log(`Hello, ${name}!`);
    })

    .catch(function (error){
        console.log ("Please enter valid name in string format");
    });
}

greet("Ashish");


