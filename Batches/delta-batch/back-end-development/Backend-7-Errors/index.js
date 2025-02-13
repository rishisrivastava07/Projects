/**
 * Refer to - D:\Coding\Development\back-end-development\MongoDB\Day-3-ExpressJS
 * Error handling is done there
 * 
 * 
 * Types of Error Handling
 * i. normal errors
 * ii. asynchronous errors - custom handling - ExpressError
 * iii. multiple error - try-catch blocks (bulky)
 * iv. wrapAsync - optimized way to handle error than try-catch 
 *                 it returns the another function and also takes functions as paramters
 * 
 * v. Moongoose Errors - 
 */

const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

app.get("/", (req,res) => {
    res.send("I am root");
});

app.get("/random", (req,res) => {
    res.send("I am random page");
});

/**
 * Error Handling Middleware - custom handler
 * when ever next() called it search for non error handling middlewares
 */

const checkToken = (req,res,next) => {
    let {token} = req.query;
    if(token == "giveaccess"){
        return next();
    }
    throw new ExpressError(401,"ACCESS DENIED!");
};

app.get("/api",checkToken, (req,res) => {
    res.send("data");
});

app.get("/err", (req,res) => {
    abcd = abcd;
});

app.get("/admin", (req,res) => {
    throw new ExpressError(403,"Acess to admin is Forbidden")
});

// handle the throwen custom error - using middleware
app.use((err,req,res,next) => {
    let {status = 500, message ="Some Error Occured"} = err;
    res.status(status).send(message);
});

// app.use((err,req,res,next) => {
//     console.log("---------Error 2 Middleware---------");
//     next(err);  // Express default Error Handler
// });

// 404 - Page Not found handle
app.use((req,res) => {
    res.status(404).send("Page Not Found!");
});

app.listen( 8080, () => {
    console.log("Server running at port 8080");
});