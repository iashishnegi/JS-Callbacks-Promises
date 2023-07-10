/*7. Multiple requests.
Create an asynchronous function that retrieves data from two different API endpoints: "https://jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns a to-do task, while the second API provides post details. The function should combine the results from both APIs and log them as an object, where the keys are "todo" and "post", and the corresponding values are the responses from the respective APIs. */


async function fetchData(){
    let result = {};
    let response1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data1 = await response1.json();
    result.todo = data1

    
    let response2 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data2 = await response2.json();
    result.post = data2;

    console.log(result);
}


fetchData();