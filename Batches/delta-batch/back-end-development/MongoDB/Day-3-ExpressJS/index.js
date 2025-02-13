const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const port = 8080;
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

/**
 * Creating the Model
 * Chat will have : (_id, from, to, message, created_at)
 */

// Root Route
app.get("/", (req, res) => {
    res.send("root is Working porperly!!");
});

// For Error Handling
function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(err => next(err));
    }
}


// Index Route
app.get("/chats", asyncWrap(async (req, res, next) => {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
}));

// New Route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

// Create Route
app.post("/chats", asyncWrap(async (req, res, next) => {
    let { from, to, message } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        message: message,
        created_at: new Date()
    });
    await newChat.save();
    res.redirect("/chats");
}));

// New - Show Route - for error handling of async functions
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
    // Way - 1 -> it will handle only chat id

    // let { id } = req.params;
    // let chat = await Chat.findById(id);
    // if (!chat) {
    //     next(new ExpressError(404, "Chat Not Found"));
    // }
    // res.render("edit.ejs", { chat });

    // Way - 2 -> it will handle whole code

    // try {
    //     let { id } = req.params;
    //     let chat = await Chat.findById(id);
    //     if (!chat) {
    //         throw new ExpressError(404, "Chat Not Found");
    //     }
    //     res.render("edit.ejs", { chat });
    // } catch (err) {
    //     next(err);
    // }

    // Way - 3 -> Using AsyncWrap()
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
        throw new ExpressError(404, "Chat Not Found");
    }
    res.render("edit.ejs", { chat });

}));

// Edit Route
app.get("/chats/:id/edit", asyncWrap(async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
}));

// Update Route
app.put("/chats/:id", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let { message: newMessage } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        { message: newMessage },
        { runValidators: true, new: true }
    );
    res.redirect("/chats");
}));

// Delete Route
app.delete("/chats/:id", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
}));

app.use((err,req,res,next) => {
    console.log(err.name);
    next(err);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Some Error Occurred" } = err;
    res.status(status).send(message);
});

app.listen(port, () => {
    console.log(`Server is listening at port no : ${port}`);
});