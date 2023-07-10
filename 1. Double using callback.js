/*1. Double using callback.
Write a function that takes in an array of integers and a callback function, and returns a new array where each
element is doubled using the callback. */

let numbers = [1,2,3,4,5];
let doubled  = [];

function doubleArray(arr  , callback){
    for (let i=0 ; i<arr.length; i++){
        doubled.push(arr[i]*2);
    }
    callback(doubled);
}


function double(doubled){
    console.log(doubled);
}

doubleArray(numbers, double )

