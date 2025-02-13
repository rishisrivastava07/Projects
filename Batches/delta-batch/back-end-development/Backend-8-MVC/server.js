const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
// const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// used to parse the cookies received from the browser or server
// app.use(cookieParser("secertcode"));

// // cookies
// app.get("/getcookies", (req,res) => {
//     res.cookie("greet","Namaste");
//     res.cookie("madeIn","India");
//     res.send("send you some cookies");
// });

// // send signed cookie
// app.get("/getsignedcookie", (req,res) => {
//     res.cookie("made-in","India", {signed: true});
//     res.send("send you some signed cookies");
// });

// // verify signed cookie
// app.get("/verify", (req,res) => {
//     console.log(req.signedCookies);
//     res.send("verified");
// });

app.get("/", (req, res) => {
    console.dir(req.cookies);
    res.send("Hi, I am root in classroom");
});

// app.get("/greet", (req,res) => {
//     let {name = "anonymous"} = req.cookies;
//     res.send(`Hi, I am ${name}`);
// });

// app.use("/users", users);
// app.use("/posts", posts);

// session ID
const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;
    
    if(name === "anonymous"){
        req.flash('error', 'user not registered');
    }else{
        req.flash('success', 'user registered successfully');
    }
    res.redirect("/hello");
});

app.get("/hello", (req, res) => {
    res.render("page.ejs", {name : req.session.name});
});

// app.get("/reqcount", (req, res) => {
//     if (req.session.count) {
//         req.session.count++;
//     } else {
//         req.session.count = 1;
//     }
//     res.send(`You sent a request ${req.session.count} times`);
// });

// app.get("/test", (req,res) => {
//     res.send("test successful");
// });

app.listen(3000, () => {
    console.log("server is listening to 3000");
});

/**
 * connect-flash - the flash is a special area of the session used for storing messages.
 * Messages are written to the flash and cleared after being displayed to the user.
 * npm i connect-flash
 */