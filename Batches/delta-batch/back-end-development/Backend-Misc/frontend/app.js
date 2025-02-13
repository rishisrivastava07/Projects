/*
const stu1 = {
    name: "adam",
    age: 25,
    marks: 95,
    getMarks: function(){
        return this.marks;
    },
};
const stu2 = {
    name: "eve",
    age: 25,
    marks: 99
};
const stu3 = {
    name: "casey",
    age: 23,
    marks: 85
};
*/

/**
 * Object Oriented Programming -
 * To structure our code - 
 * 
 * a. Object Prototype - 
 * 
 * Prototypes are the mechanism by whch JavaScript objects inherit features from one another. 
 * It is like a single template object that all objects inherit methods and properties from without having their own copy.
 * eg - 
 *  arr.__proto__ -> (reference)
 *  Array.prototype -> (actual object)
 *  String.prototype -> (actual object)
 * 
 * b. New Operator -
 * 
 * The new operator lets developers create an instance of a user-defined object type or of one of the built-in objects types that has a constructor function.
 * 
 * c. constructor - 
 * d. classes - 
 * 
 * Classes are a template for creating objects.
 * The constructor method is a special method of class for creating and initializing an object instance of that class.
 * 
 * e. Inheritance - 
 * 
 * Inheritance is a mechanism that allows us to creat new classes on the basis of already existing classes.
 * 
 * f. keywords (extends, super)
 */

/* Object Prototype - */

// let arr1 = [1,2,3];
// arr1.sayHello = () =>{
//     console.log("I am arr");
// }
// let arr2 = [1,2,3];
// arr2.sayHello = () =>{
//     console.log("I am arr");
// }

/*Here the arr1 and arr2 uses same prototype but also as soon as it creates elements inside an array it occupies seperate memory in the JavaScript. So it returns false */

// console.log("Check arr1.sayHello === arr2.sayHello : ", arr1.sayHello === arr2.sayHello);

/* Here no memory is created the comparsion isbetween the two same prototype. So it returns true. */

// console.log("Check 'abc'.toUpperCase == 'xyz'.toUpperCase : ", "abc".toUpperCase == "xyz".toUpperCase);

/**
 * Factory Functions - A function that creates objects. 
 * Disadvantages - are they create a cop of all the factory functions which are not necessary.
 */
// function PersonMaker(name,age){
//     const person = {
//         name : name,
//         age : age,
//         talk(){
//             console.log(`Hi, my name is ${name}`);
//         }
//     };

//     return person;
// }

// let p1 = PersonMaker("gringer",23); // copy
// let p2 = PersonMaker("harry",23); // copy
// console.log("p1.talk() === p2.talk() : ", p1.talk() === p2.talk());

/* new Operator & constructor - */
/* Constructors - doesn't return anything & start with capital */

// function Person(name,age){
//     this.name = name; 
//     this.age = age;
// }

// Person.prototype.talk = () =>{
//     console.log(`Hi, I am ${this.name}`)
// }

/* p1 and p2 are the instances.*/

// let p1 = new Person("adam",23);
// let p2 = new Person("eve",23);
// console.log("p1.talk() === p2.talk() : ", p1.talk() === p2.talk());


/* Classes - */
// class Person{
//     constructor(name,age){
//         this.name = name;;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// let p1 = new Person("adam",25);
// let p2 = new Person("eve",25);
// console.log("p1.talk === p2.talk : ", p1.talk === p2.talk);

/* Inheritance */
class Person{
    constructor(name,age){
        console.log("person class constructor");
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}
class Student extends Person{
    constructor(name,age,marks){
        console.log("student class constructor");
        super(name,age);
        this.marks = marks;
    }
}

let stu1 = new Student("adam",25,95);

class Teacher extends Person{
    constructor(name,age,subject){
        console.log("teacher class constructor");
        super(name,age);
        this.subject = subject;
    }
}

let teach1 = new Teacher("gringer",32,"maths");