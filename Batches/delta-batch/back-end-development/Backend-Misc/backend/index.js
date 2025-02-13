const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

/**
 * GET & POST Requests- 
 * 
 * GET - 
 * used to GET some response
 * Data sent in query strings(limited, string data & visible in URL).
 * in GET request the within query strings all the data is visible in url only.
 * 
 * POST -
 * Used to POST something (for Create/ Write/ Update).
 * Data sent via request body (any type of data).
 */

app.get("/register",(req,res)=>{
    let {user, password} = req.query;
    res.send(`standard GET response. Welcome ${user}`);
});

/**
 * Handling POST requests -
 * Set up POST request route to get some response.
 * Parse POST request data.
 */
app.post("/register",(req,res)=>{
    let {user, password} = req.body;
    res.send(`standard POST response. Welcome ${user}`);
});

app.listen(port,()=>{
    console.log("listening to port 8080");
});