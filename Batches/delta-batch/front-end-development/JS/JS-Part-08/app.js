// 1. forEach() method -
// let arr = [1,2,3,4,5];

// Way 1 - using arrow function
// arr.forEach( (el) => {
//     console.log(el);
// })

// Way 2 - using simple function
// arr.forEach(function(el){
//     console.log(el);
// })

// Way 3 - using separately by calling forEach function
// function print(el){
//     console.log(el);
// }
// arr.forEach(print);


// Creating an objects 
let arr = [
    {
        name: "rishi",
        marks: 95
    },
    {
        name: "suman",
        marks: 90
    },
    {
        name: "anjali",
        marks: 99
    }
]


// forEach function in objects
// arr.forEach((student) =>{
//     console.log(student.marks);
// });
    
// 2. map() - method - 

let num = [1,2,3,4];
let double = num.map((el) => {
    return el*2;
})

let gpa = arr.map( (student) => {
    return student.marks / 9.5;
})


// 3. Filter function() -
let nums = [2,4,1,5,6,2,7,8,9];
let even = nums.filter((num) => (num%2 == 0));

// every method - returns true if every element of an array gives true for some functions. else return false;

let cond1 = [1,2,3,4].every((el) => (el%2 == 0));
let cond2 = [2,4].every((el) => (el%2 == 0));

// reduce() - reduce the array to a single value 
let ans =  [1,2,3,4].reduce((res,el) => (res+el));


// finding maximum in an array
let sampleArr = [2,3,4,5,3,4,7,8,1,2];

let maxResult = sampleArr.reduce((res,el) => {
    if(el > res){
        res = el;
    }
    return res;
})
let minResult = sampleArr.reduce((res,el) => {
    if(el < res){
        res = el;
    }
    return res;
})

let multipleOfTen = [11,20,30,10].every((el) => (el%10 == 0));

// Default parameters -
function sum(a,b = 3){
    return a+b;
}

// Spread() - expands an iterable into multiple values
let arrIterables = [1,2,3,4,5];
let nameIterables = "rishi srivastava";

// Spread with array literals
let spreadArr = [1,2,3,4,5];
let newArr = [...spreadArr];
let oddArr = [1,3,5,7];
let eveArr = [2,4,6,8];
let combinedArr = [...oddArr, ...eveArr];

// spread - with object literals
const data = {
    email: "ironman@gmail.com",
    password: "abcd",
};

const dataCopy = {...data, id: 123};

let obj1 = {...spreadArr};

// Rest - allows a function to take an indefinite number of arguments and bundle them in an array

function sum(...args){
    return args.reduce((add,el) => add+el);
}

// Destructing - storing values of array into multiple variables.

let names = ["tony","bruce","steve","peter"];
let [winner,runner] = names;
console.log(winner,runner);

// Destructing for objects -

const student = {
    name: "rishi",
    class: "3rd year",
    age: 23,
    subject: ["os","ai","web tech","mobile networks"],
    username: "rishii78",
    password: 1234
};

const {username: user, password: pass, city="kolkata"} = student;