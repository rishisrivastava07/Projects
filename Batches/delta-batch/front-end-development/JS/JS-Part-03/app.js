/* 
    String Methods - actions that can be performed on objects.
*/

// let msg = "  Hello  ";
// console.log(msg);
// msg.trim();
// console.log(msg);

// let password = prompt("Enter your password");
// console.log(password.trim());

/* 
    String are Immutable in JS - No changes can be made to strings. 
    Whenever we do try to make a change, a new string is created and old one remains same.
*/

// let msg = "  Rishi Srivastava  ";
// console.log(msg);
// msg = msg.trim();
// console.log(msg);

/* 
    String methods with arguments - is a some value that we pass to the method.
        1. str.toUpperCase() - "RANDOM STRING"
        str.toLowerCase() - "random string"
        2. indexOf - returns the first index of occurence of some value in string. Or gives -1 if not found. 
        3. slice - return a part of the original string as a new string
        4. replace - searches a value in the string & returns a new string with the value replaced.
        5. repeat - returns a string with the number of copies of a string.
*/

// let str = "Rishi";
// let upper = str.toUpperCase();
// let lower = str.toLowerCase();

// let str = "IloveCoding";

// console.log(str.indexOf("C"));  // Found at index 5
// console.log(str.indexOf("J"));  // Not Found

// console.log(str.slice(5));
// console.log(str.slice(1,4));
// console.log(str.slice(-1));
// console.log(str.slice(length-1));


// console.log(str.replace ("o","x"));

// console.log(str.repeat(3));
/*
    Method Chaining - using one method after another. Order of execution will be left to right.
    e.g. - str.toUpperCase().trim();
*/
// let msg = "    hello    ";
// let newMsg = msg.trim().toUpperCase();
// console.log(msg);
// console.log(newMsg);



/*
    Array - Linear collection of things (Data Structure).
    It is a object type in javascript
    Arrays are Mutable

    Adding and deleting from last
        push("")    
        pop()
    Adding and deleting from front
        unshift("")
        shift()

    Methods in Arrays -
        i. indexOf() - 
            if(present):
                return index-value; 
            else:
                return -1;
        ii. includes() - 
            if(present):
                return true; 
            else:
                return false;
        iii. concat() - 
            primary.concat(secondary);
        iv. reverse() - 
            primary.reverse();
        v. slice(start,end) - copies a portion of an array
            changes are doesnot effect original array
        vi. splice(start,deleteCount,item0....itemN) - removes/ replaces/add element in place 
        changes are effected on original array
        vii. sort() - sorts an array 


    Array References - address in memory
    Constant Arrays - const arr = [1,2,3,4]
        in above example the arr is constant not the value in that arr array is constant. So we can perform multiple operation on it.

    Nested Arrays - array of arrays
    e.g.- let arr = [[2,4],[3,6],[4,8]];
*/

// let students = ["rishi","suman","anjali"];
// let nums = [2,4,6,8]; 

// let marks = [99,89,67,42,100];

// let info = ["rishi", 23, 5.9];

// let cars = ["audi","xuv","maruti","bmw"];

/*
Practise Qs - to show the ticc-tac-toe game state
*/

let gameState = [['x',null,'o'],[null,'o',null],['o',null,'x']];