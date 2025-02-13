/**
 * Library v/s Framework :-
 * 
 * Library - a library is a collection of pre-written code that can be used to perform specific tasks.
 * eg - axios
 * Framework - A framework is a set of pre-written code that provides a structure for developing software applications.
 * eg - express
 * 
 * Express - A Node.js web application framework that helps us to make web applications. It is used for server side programming.
 * Major uses - 
 *  a. Listen for incoming request
 *  b. Parse the request
 *  c. match response with routes
 *  d. suitable response can be sent
 */  

// We write code here

const express = require("express");  // it is a function and must be exceuted and it returns some value.
const app = express();  // by convention we use the variable name as "app" and it is an object

// console.dir(app);

/**
 * Port are the logical endpoints of a network connection that is used to exchange information between a web server and a web client.
 */
let port = 3000;
// most common method is listen
app.listen(port, () =>{
    console.log(`app is listening on port ${port}`);
});

/**
 * app.use() - listen any type of request like get, post or url. Then it sends the callback function is executed.
 */

// app.use((req,res)=>{
//     console.log("request received");
// });

/**
 * On server side terminal - 
 * app is listening on port 3000
 * request received
 */


/**
 * Sending a response -
 * Two objects - 
 * a. request - ref - https://expressjs.com/en/4x/api.html#req
 * b. response - ref - https://expressjs.com/en/4x/api.html#res
 * note - at starting http request generate textbased request but Express.js changes it to an object based request. This is called parsing technique.
 * 
 */


/**
 * res.send() - is used to send the data to client through our servers.
 */

/*
app.use((req,res)=>{
    console.log("request received");
    // res.send("this is a basic response");
    // res.send({
    //     name: "apple",
    //     color: "red",
    // });
    let code = "<h1>Fruits</h1> <ul> <li>apple</li> <li>orange</li> <li>mango</li> <li>banana</li> </ul>"
    res.send(code);
});
*/

/**
 * Routing - it is a process of selecting a path for traffic in a network or between or across multiple networks.
 * ref - https://expressjs.com/en/4x/api.html#res.get
 */

// app.get("/", (req,res) => {
//     res.send("hello I am root");
// });

// app.get("/search", (req,res) => {
//     res.send("you contacted search path");
// });

// app.get("/help", (req,res) => {
//     res.send("you contacted help path");
// });

/* " * " is used to handle the pages which are not available. */

// app.get("*", (req,res) => {
//     res.send("this page doesnot exist");
// });

// app.post("/", (req,res) => {
//     res.send("you sent a post request to root");
// });

/**
 * Nodemon - to automatically restart over with code changes.
 */

/**
 * Path Parameters -
 */

app.get("/", (req,res) => {
    res.send("hello I am root");
});

app.get("/:username/:id", (req,res) => {
    let {username, id } = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}.</h1>`
    res.send(htmlStr);
});

/**
 * Query String - 
 */

app.get("/search", (req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("<h1>no query is searched</h1>");
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
});