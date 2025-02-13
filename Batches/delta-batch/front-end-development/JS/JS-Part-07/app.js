// this Keyword - "This" keyword refers to an object that is executing the current piece of code.

// const student = {
//     name: "rishi",
//     age: 23,
//     maths: 95,
//     phy: 81,
//     chem: 81,
//     getAvg(){
//         console.log(this);
//         let avg = (this.maths+this.phy+this.chem)/3;
//         console.log(avg);
//     }
// }

// There is always a windows object on top level of the javascript code.
// function getAvg(){
//     console.log(this);
// }


// try-catch block
// let a = 5;
// console.log("hello");
// console.log("hello");
// console.log("hello");
// try{
//     console.log(a);
// }
// catch(e){
//     console.log("caught an error. a is not defined");
//     console.log(e);
// }
// console.log("hello2");
// console.log("hello2");
// console.log("hello2");

// Miscellinous Topics -
// Arrow Functions - const func = (arg1,arg2..) => {function definition}

// const sum = (a,b) => (a+b);

// const pow = (a,b) => (a**b);

// const hello = () => {
//     console.log("hello");
// }

// implicit return in arrow functions :
// const mul = (a,b) => (a*b);

// Set Timeout - setTimeout(callback-function, timeout(in milliseconds))

// console.log("hi there !");

// setTimeout( () => {
//     console.log("Inside the setTimeout()");
// },4000);

// console.log("outside the setTimeout()");

// Set Interval - setInterval(callback-function, timeout(in milliseconds)) 

// setInterval( () => {
//     console.log("Inside the setInterval() ");
// },2000);


// this with arrow functions -
// Arrow function - lexicalscope - it depends on the parent scope 
// function - scope - this - depends on the calling object.

const student = {
    name: "rishi",
    marks: 95,
    prop: this, // global scope
    getName: function(){
        console.log(this);
        return this.getName;
    },
    getMarks: () => {
        console.log(this);  // parent's scope -> window
        return this.marks;
    },
    getInfo1: function(){
        setTimeout( ()=>{
            console.log(this)
        },2000);
    },
    getInfo2: function(){
        setTimeout( function() {
            console.log(this)
        },2000);
    }
};
// prop is the property

// Practise question -
// write an arrow function that returns the square of a number 'n'.
squareOfANumber = (n) => (n*n); 

// Write a function that prints "Hello World" 5 times at intervals of 2s each.
setInterval( () => {
    console.log("Hello World!");
},2000);
