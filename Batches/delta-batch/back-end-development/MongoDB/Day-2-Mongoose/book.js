const mongoose = require("mongoose");

main()
    .then((res) => {
        console.log("Connection Successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

// const bookSchema = new mongoose.Schema({
//     title: String,
//     author: String,
//     price: Number,
//   });

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is too low for Amazon selling"],
    },
    discout: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
    genre: [String],
});

const Book = mongoose.model("Book", bookSchema)

Book.findByIdAndUpdate("6581a936e720f82427d9eb07", { price: -1 }, { runValidators: true })
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err.errors.price.properties.message);
    });

// let book1 = new Book({
//     title: "Marvel Comics v2",
//     price: 600,
//     genre: ["comics","superhero","fiction"],
// });

// book1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });
