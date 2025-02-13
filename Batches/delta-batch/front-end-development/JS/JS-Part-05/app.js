// JS - Object Literals - Used to store keyed collections & complex entities.
// property => (key,value) pair
// Objects are a collection of properties
// objects and object literals are different
//  It doesnot have specific order like the arrays

// eg-
let delhi = {
    latitude : "28.7041° N",
    longitude : "77.1025° E"
};

const student = {
    name: "rishi",
    age: 23,
    marks: 82.7,
    city: "Kolkata"
};

// We cannot change the reference of student i.e. what the meaning of const
// We can change the values inside the student object.

let student2 = ["rishi",23,82.7,"Kolkata"];

const item = {
    price: 100.99,
    discount: 50,
    colors: ["red","blue"]
};


// Activity - create an object literal for the properties of the thread/ twitter post which includes
// username, content, likes, reposts, tags

const post = {
    username : "@rishisrivastava",
    content: "This is my #firstPost",
    likes : 150,
    repost: 5,
    tags: ["apnacollege","delta"]
};

// Get values
let students = {
    name: "rishi",
    marks: 82.7
};

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};

// JS object always converts the given value in [] as string and then check or matches with the key present in that object and return the value pair of that

// keys are stored w/o the double quotes
// we cannot access like this - obj.1 - because it doesnot converts the 1 into string for check the matching key value.

const student3 = {
    name: "rishi",
    age: 23,
    marks: 82.7,
    city: "Kolkata"
};


// Objects of Objects - storing information of multiple students
const classInfo = {
    rishi : {
        grade: "A",
        city: "Kolkata"
    },
    suman : {
        grade: "B+",
        city: "Asansol"
    }
};

// Array of Objects - storing information of multiple students
const classInfo2 = [
    {
        name: "rishi",
        grade: "A",
        city: "Kolkata"
    },
    {
        name: "suman",
        grade: "B+",
        city: "Asansol"
    }
];


/*
    Math Object - predefined object in JS
        Properties -
            Math.PI
            Math.E
        Methods -
            Math.abs(n)
            Math.pow(a,b)
            Math.floor(n)
            Math.ceil(n)
            Math.random() - generate random numbers from (0,1). - contains decimal values.
*/

// Generate a random number between 1 to 100
let num = Math.floor(Math.random()*100)+1;
// Generate a random number between 1 and 5
let num2 = (Math.floor(Math.random()*10))%5 + 1;


// Guessing Game - User enters a max number & then tries to guess a random generated number between 1 to max.

let range = prompt("Enter your range : (1 - range)");
const random = Math.floor(Math.random() * range) + 1;

let guess = prompt("guess the number : ");
while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log(`you are right! congrats!! random number was ${random}`);
        break;
    }
    else if(guess < random){
        guess = prompt("you are wrong! you guessed number is smaller than random number!! please guess the number : ");
    }
    else{
        guess = prompt("you are wrong! you guessed number is larger than random number!! please guess the number : ");
    }
}