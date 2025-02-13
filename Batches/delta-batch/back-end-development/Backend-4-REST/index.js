/**
 * REST - Representational State Transfer
 * REST is an architectural style that defines a set of constraints to be used for creating web services.
 * 
 * RESTful API's - which follows REST rules and constraints.
 * We use CRUD operations - CREATE READ UPDATE DELETE - to apply CRUP we use RESTful API's.
 * Use nouns instead of verbs in endpoint paths
 */

/**
 * CRUD Operations - 
 * 
 * GET - retreives resources.
 * POST - submit new data to the server.
 * PUT - updates existing data.
 * PATCH - update existing data partially.
 * DELETE - removes data.
 */

/**
 * Creating RESTful APIs
 * 
 * GET - /post - to get data for all posts. -> INDEX ROUTE
 * POST - /posts - to add a new post. -> CREATE ROUTE
 * GET - /posts/:id - to get one post (using id). -> VIEW ROUTE
 * PATCH/PUT - /posts/:id - to update specific post -> UPDATE ROUTE
 * DELETE - /posts/:id - to delete specific post -> DESTORY ROUTE
 */

const express = require("express");
const app = express();
const port = 8080;
// require paths
const path = require("path");

/**
 * Create id for Posts - 
 * UUID Package - Universally unique identifier.
 * npm install uuid
 */
const { v4: uuidv4 } = require('uuid');

const methodOverride = require("method-override");
// override with POST having ?_method=PATCH
app.use(methodOverride("_method"));

// to parse the data from CLIENT SIDE which can be understood by EXPRESS.JS
app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views")); // set path for view

app.use(express.static(path.join(__dirname,"public"))); // set path for public

/* Implement : GET /posts -> INDEX ROUTE */
let posts = [
    {
        id: uuidv4(),
        username: "rishii78",
        content: "I love coding!"
    },
    {
        id: uuidv4(),
        username: "sumankk",
        content: "Hard work is important to acheive success!"
    },
    {
        id: uuidv4(),
        username: "rahulkr",
        content: "I got selected for my first internship !"
    },

];

app.get("/posts",(req,res) => {
    res.render("index.ejs", {posts});
});

/** Implement : POST /posts -> CREATE ROUTE
 * 
 * to implement this we need 2 routes - in terms of a form
 * i. Serve the form - GET - /posts/new
 * ii. Add the new post - POST - /posts
 * 
 * OR -
 * (user,content) - form -> POST - new post add to Arr (i.e. DB)
 */

app.get("/posts/new",(req,res) =>{
    res.render("new.ejs");
});

app.post("/posts", (req,res) =>{
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
    // res.send("post request is working");
});

/**
 * Implement : GET /posts/:id -> Show(view) Route
 * to get one post (using id).
 */

app.get("/posts/:id", (req,res) =>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
});


/**
 * Implement : PATCH /posts/:id
 * Update Route - to update specific post
 */
app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs",{post});
});

/**
 * Implement: /posts/:id
 * Destory Route
 * DELETE - to delete specific post
 */

app.delete("/posts/:id",(req,res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    // res.send("delete successfully");
    res.redirect("/posts");
});

app.listen(port,() => {
    console.log(`listening to port : ${port}`);
});