/*
 * Async Functions -
 * async() and await() functions
 * i. async() - creates an async function. By default return a promise. 
*/

// async function greet(){
//     // abc.abc();   // returns a error because abc.abc() not defined
//     /*
//         Console Window - 
//         greet();

//         output - 
//         Promise {<rejected>: ReferenceError: abc is not defined
//             at greet (http://127.0.0.1:5500/JS/JS-Part-12/app.js:9:5)
//         …}[[Prototype]]: Promise[[PromiseState]]: "rejected"[[PromiseResult]]: ReferenceError: abc is not defined
//             at greet (http://127.0.0.1:5500/JS/JS-Part-12/app.js:9:5)
//             at <anonymous>:1:1
//         app.js:9 Uncaught (in promise) ReferenceError: abc is not defined
//             at greet (app.js:9:5)
//             at <anonymous>:1:1
//     */
//     // throw "some random error";
//     /*
//         Console Window - 
//         greet();

//         output - 
//         Promise {<rejected>: 'some random error'}
//         [[Prototype]]: Promise
//         [[PromiseState]]: "rejected"
//         [[PromiseResult]]: "some random error"
//         app.js:21 Uncaught (in promise) some random error    
//     */
//     return "hello"; // returns a promise
//     /*
//         Console Window - 
//         greet();

//         output - 
//         Promise {<fulfilled>: 'hello'}
//         [[Prototype]]: Promise
//         [[PromiseState]]: "fulfilled"
//         [[PromiseResult]]: "hello"
//     */
// }

// greet().then((result)=>{
//     console.log("Promise was resolved with res : ", result);
// })
// .catch((error)=>{
//     console.log("Promise was rejected with err : ", error);
// });

/* It can also applied on the arrow function */
// let demo = async ()=>{
//     return 5;
// };


/*
 *  Await Keyword - pauses the execution of its surrounding async function until the promise is settled (resolved or rejected).
 *  Await can only be used in async functions only.
*/

// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo(){
//     // await getNum(); // await generally holds the execution until the previous promise is resolved or rejected.
//     // await getNum();
//     // getNum();
//     /*
//         Console Window - 
//         demo();

//         output - 
//         Promise {<pending>}
//         [[Prototype]]: Promise
//         [[PromiseState]]: "fulfilled"
//         [[PromiseResult]]: undefined
//         7
//         6
//         1
//     */
// }

// h1 = document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*5)+1;
//             if(num > 3){
//                 reject("Promise rejected");
//             }
//             h1.style.color = color;
//             console.log(`color changed to ${color}`);
//             resolve("color changed!");
//         },delay);
//     });
// }

// async function callingFunction(){
//     try{
//         await changeColor("red",1000);
//         await changeColor("orange",1000);
//         await changeColor("green",1000);
//         await changeColor("blue",1000);
//         // await changeColor("pink",1000);
//         // await changeColor("yellow",1000);
//         // await changeColor("brown",1000);
//     }
//     catch(err){
//         console.log("Error caught : ", err);
//     }

//     let a = 5;
//     console.log(a);

//     /*
//         Console Window - (without error handling)
//         callingFunction();

//         output - 
//         Promise {<pending>}
//         app.js:105 color changed to red
//         app.js:105 color changed to orange
//         app.js:105 color changed to green
//         app.js:105 color changed to blue
//         app.js:121 5
//     */

//     /*
//         Console Window - (with error handling)
//         callingFunction();

//         output - 
//         Promise {<pending>}
//         app.js:105 color changed to red
//         app.js:122 Error caught :  Promise rejected
//         app.js:126 5
//     */
// }

/**
 * API - Application Programming Interface
 * Assume like a waiter
 * User(js) -> {request} -> API(URL, Endpoint) -> {request for data} -> Server
 * User <- {response} <- API(URL, Endpoint) <- {response as data} <- Server
 * API's returns the JSON data as in return
 * 
 * 
 * Some Free API's are -
 * i.) https://catfact.ninja/fact
 * ii.) https://www.boredapi.com/api/activity
 * iii.) https://dog.ceo/api/breeds/image/random
 * 
 * 
 * JSON - JavaScript Object Notation - www.json.org
 * similar to XML - extensible markup language.
 * Generally JSON always comes in string format
 * JSON.parse(data) method - to parse a string data into a JS Object
 * JSON.stringify(json) method - to parse a JS data into JSON
 */

// let jsonResponse = '{"fact":"Cats eat grass to aid their digestion and to help them get rid of any fur in their stomachs.","length":92}';

// let validResponse = JSON.parse(jsonResponse);
// console.log(validResponse.fact);
// console.log(validResponse.length);

// let student = {
//     name: 'Rishi',
//     roll: 23
// };

// let objectResponse = JSON.stringify(student);
// console.log(objectResponse);


/**
 * Testing API requests - tools
 * i. Hoppscoth - http://hoppscotch.io/
 * ii. Postman - download and setup
 */

/**
 * AJAX - Asynchronous JavScript and XML - total process through which we call API's
 * http verbs -
 * i. GET - 
 * ii. POST -
 * iii. DELETE - 
 * 
 * Status Code - refer to mdn
 * 200 - OK
 * 404 - Not Found
 * 400 - Bad Request
 * 500 - Internal Server Error
 */

let url = "https://catfact.ninja/fact";

// fetch() always return promise
// fetch(url)
// .then((response)=>{
//     console.log(response);
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
//     return fetch(url);
// })
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })


async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
    }
    catch(err){
        console.log("error - ", err);
    }
}
