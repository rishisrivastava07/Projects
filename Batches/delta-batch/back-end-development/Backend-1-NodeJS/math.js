// const sum = (a,b) => a+b;
// const mul = (a,b) => a*b;
// const g = 9.8;
// const PI = 3.14;

// module.exports = "hello!";
// let obj = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     PI: PI
// };

// module.exports = obj;

/*  OR  */

// module.exports  = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     PI: PI
// };

/**
 *  OR
 * exports.sum = (a,b) => a + b;  - when it is treated as an objects in which functions and properties are tried to added.
 */

// module.exports.sum = (a,b) => a+b;
// module.exports.mul = (a,b) => a*b;
// module.exports.g = 9.8;
// module.exports.PI = 3.14;


/* This all variables are exported individually not as an object. */
export const sum = (a,b) => a+b;
export const mul = (a,b) => a*b;
export const g = 9.8;
export const PI = 3.14;