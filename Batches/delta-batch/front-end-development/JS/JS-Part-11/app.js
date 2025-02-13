// Call Stack

// function hello(){
//     console.log("Inside hello");
//     console.log("hello");
// }

// function demo(){
//     console.log("Calling hello");
//     hello();
// }

// console.log("Calling demo");
// demo();

/* 
    Breakpoints - to track on browser or debugging
    In inspect window go to sources then top then app.js where we can check call stacks using breakpoints
*/

// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

/* 
    JS is Single Threaded Language -
        i. callbacks - generally the setTimeout functions or any waiting is done by browser not by JS.
    When the delay is over the function is send to the top of the JS call stack by the browser and then JS perform that action according to LIFO order.
*/
// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a+b);

/*
    synchronous nature - ek ke baad ek exceute krna ko synchronous bolte hai.
    asynchronous nature - jahan hum setTimeout jaise functions ke through uski exceution sequence ko badlte hai.
*/

// setTimeout(function(){
//     console.log("Apna College");
// },2000);
// setTimeout(()=>{
//     console.log("Kem Cho");
// },2000);

// console.log("Hello");

/*
    CallBack Hell - callback nesting phenomena -> its a drawbacks
*/

// h1 = document.querySelector("h1");

// function changeColor(color,delay, nextColorChange){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     },delay);
// }

// changeColor("red",1000, ()=>{
//     changeColor("orange",1000, ()=>{
//         changeColor("green",1000);
//     });
// });

/* 
    to overcome callbacks hells we use promises - async and awake type functions.

    Promises - promises object represents the eventual completion (or failure) of an asynchronous operation and its resullting value.
    Promises - {object} resolve & reject
        It has three states - 
            i. pending - don't know what will happen 
            ii. rejected - the promise doesn't fullfilled.
            iii. fullfilled - the promise is completed successfully.
*/

// below code is callback hell

// function saveToDB(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// saveToDB(
//     "Apna College",
//     () => {
//         console.log("success : your data was saved: ");
//         saveToDB("hello world",()=>{
//             console.log("success2 : your data was saved: ");
//             saveToDB("rishi srivastava",()=>{
//                 console.log("success3 : your data was saved: ");
//             }, ()=> {
//                 console.log("failure3 : weak connection. data not saved");
//             })
//         }, ()=> {
//             console.log("failure2 : weak connection. data not saved");
//         })
//     },
//     () => {
//         console.log("failure : weak connection. data not saved");
//     }
// );

// Uses of promises - 

// function saveToDB(data) {
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolve("resolve : data was saved");
//         }
//         else{
//             reject("reject : weak connection");
//         }
//     });
// }

// saveToDB("apna College");

/*
    Promises => {{fulfilled} -> then()} & {{reject} -> catch()}
*/

// function saveToDB(data) {
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolve("resolve : data was saved");
//         }
//         else{
//             reject("reject : weak connection");
//         }
//     });
// }

// let request = saveToDB("apna College"); // req = promise object
// request.then(()=>{
//     console.log("promise was resolved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("promise was rejected");
// })

// saveToDB("apna college")
//     .then(()=>{
//         console.log("promise was resolved");
//     })
//     .catch(()=>{
//         console.log("promise was rejected");
//     })

/*
    Promises Chaining => improvised version
*/
// saveToDB("apna college")
//     .then((result)=>{
//         console.log("data 1 was saved.");
//         console.log(result);
//         return saveToDB("hello world");
//     })
//     .then((result)=>{
//         console.log("data 2 was saved");
//         console.log(result);
//         return saveToDB("rishi");
//     })
//     .then((result)=>{
//         console.log("data 3 was saved");
//         console.log(result);
//     })
//     .catch((error)=>{
//         console.log("promise was rejected");
//         console.log(error);
//     });

// Lets apply promises to our callback hell

h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed!");
        },delay);
    });
}

changeColor("red",1000)
    .then(()=>{
        console.log("red color was completed");
        return changeColor("orange",1000);
    })
    .then(()=>{
        console.log("orange color was completed");
        return changeColor("green",1000);
    })
    .then(()=>{
        console.log("green color was completed");
        return changeColor("blue",1000);
    })
    .then(()=>{
        console.log("blue color was completed");
        return changeColor("yellow",1000);
    });

// changeColor("red",1000, ()=>{
//     changeColor("orange",1000, ()=>{
//         changeColor("green",1000);
//     });
// });