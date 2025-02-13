/**
 * Templating - EJS(Embedded JavaScript templates)
 * EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.
 */

const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
/**
 * Using EJS
 * it is by defualt required by the express interally. 
 * view -> imagine as a template and it is used to create template and render it.
 * Using EJS we dont sent the responses but generally render it.
 * By default we need to create a view directory for rendering the ejs files.
 * because by default Express will search for the view directory in it and find the .ejs files for rendering.
 */

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    // res.render("home.ejs");
    res.render("home");
});

app.get("/ig/:username",(req,res)=>{
    // const followers = ["adam","steve","bob","ostwald","noddy","tom","jerry","nobita"];
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs");
    }
    console.log(data);
})
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});

/**
 * Interpolation Syntax - Interpolation refers to embeeding expressions into marked up text.
 * EJS - is used to make HTML page as dynamic
 */

app.get("/rolldice", (req,res)=>{
    let diceVal =  Math.floor(Math.random()*6)+1;
    // res.render("rolldice.ejs",{num: diceVal});
    res.render("rolldice.ejs",{diceVal});
})

/**
 * Serving Static Files - means to include css, js like files with our code.
 * app.use(express.static(folder_name));
 */


/**
 * Includes - are used for sub templates
 * also known as partials
 * ref - https://ejs.co/
 */
