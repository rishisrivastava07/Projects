/**
 * Middleware - It is an intermediary
 * Request -> Middleware -> Response
 * 
 * in Express - Middleware in Express are functions that come into play after the server receives the request
 * and before the response is sent to the client.
 * 
 * Common Middleware functions :
 * i. methodOverride
 * ii. bodyParser
 * iii. express.static
 * iv. express.urlencoded
 * 
 * Middlewares functions -
 * i. Exceute any code
 * ii. Make changes to the request and response objects
 * iii. End the request-response cycle.
 * iv. Call the next middleware function in the stack. (Chaining)
 */

const express = require("express");
const app = express();

// define our 1st middleware

// app.use((req,res) => {
//     console.log("Hi, I am middleware");
//     res.send("I am sending through middleware"); 
// });

/**
 * Using next - the next middleware function is commonly denoted by a variable named next.
 * If the current middleware function doesnot end the request-response cycle
 * it must call next() to pass control to the next middleware functions.
 * next() - is considered as the end of middleware
 */

// app.use((req,res,next) => {
//     console.log("Time 1 : ", Date.now());
//     return next();
// });
// app.use((req,res,next) => {
//     console.log("Time 2 : ", Date.now());
//     next();
// });

/**
 * Middlewares used as the callback functions
 */
app.use("/random", (req,res,next) => {
    console.log("I am only for random");
    next();
});


/**
 * Handling Errors - Express Default Error Handler
 * Syntax Error, 
 */

// app.get("/wrong", (req,res) => {
//     abcd = abcd;
// });

/**
 * API Token as Query String -
 * Let's create a middle-ware for an api that checks if the access token was passed in the query string or not
 */

// Way - 1 

// app.use("/api", (req,res,next) => {
//     let {token} = req.query;
//     if(token == "giveaccess"){
//         return next();
//     }
//     res.send("ACCESS DENIED");
// });

// app.get("/api", (req,res) => {
//     res.send("data");
// });

// Way - 2

const checkToken = (req,res,next) => {
    let {token} = req.query;
    if(token == "giveaccess"){
        return next();
    }
    throw new Error("ACCESS DENIED!");
};

app.get("/api",checkToken, (req,res) => {
    res.send("data");
});

app.get("/", (req,res) => {
    res.send("I am root");
});

app.get("/random", (req,res) => {
    res.send("I am random page");
});

/**
 * Creating Utility Middleware -> Logger -> log (useful info or console print)
 */

// logger - morgan
// app.use((req,res,next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

// 404 - Page Not found handle
app.use((req,res) => {
    res.status(404).send("Page Not Found!");
});

app.listen(8080, () => {
    console.log("Server is listening at 8080");
});

