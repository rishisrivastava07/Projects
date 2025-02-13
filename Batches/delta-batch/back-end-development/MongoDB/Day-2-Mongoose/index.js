/**
 * Mongoose - A library that creates a connection
 * between MongoDB and Node.js JavaScript Runtime
 * Enviornment
 * It is an ODM (Object Data Modeling) Library.
 *
 * Installation - npm i mongoose
 */

// require mongoose in express to use it
const mongoose = require("mongoose");

// first start the MongoDB shell in command prompt before running this server.
// establish the connection of index.js with mongoDB with help of mongoose
main()
  .then((res) => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

/**
 * Schema - defines the shape of the documents within that collection.
 * DB -> Collections -> Documents
 */

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

/**
 * Models - in mongoose is a class with which we construct documents.
 * it is like a class and its object must be created
 */

// new User model instance is created and also New collection 'User' is created.
const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

/**
 * Insert -
 * insert One
 * insert Many
 */

// const user2 = new User({
//   name: "Eve",
//   email: "eve@yahoo.in",
//   age: 32,
// });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.insertMany([
//   { name: "Motu", email: "motu@gmail.com", age: 36 },
//   { name: "Patlu", email: "patlu@gmail.com", age: 35 },
//   { name: "dr jatka", email: "drjatka@gmail.com", age: 42 },
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/**
 * Note - Mongoose uses Operation Buffering
 * Mongoose lets you start using your models immediately,
 * without waiting for mongoose to establish a connection to MongoDB
 */

/**
 * Find - Model.find() // returns a Query Object (thennable)
 * Mongoose Queries are not promises. But they have a .then()
 */

// returns all data without filters
// User.find().then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// });

// User.find({ age: { $gte: 47 } })
//   .then((res) => {
//     console.log(res[0].name);
//   }).catch((err) => {
//     console.log(err);
//   });


/**
 * Model.findOne() // returns a single result
 * Model.findById()
 */

// User.findOne({ age: { $gte: 35 } }).then((data) => {
//   console.log(data);
// })

// User.findById('65814dd44b9cdc3dc0bbe0c8')
//   .then((data) => {
//     console.log(data);
//   })

/**
 * UPDATE - 
 * Model.updateOne()
 * Model.updateMany()
 */

// User.updateOne({ name: "dr jatka" }, { name: "Dr Jatka" })
//   .then((res) => {
//     console.log(res);
//   }).catch((err) => {
//     console.log(err);
//   })

// User.updateMany({ age: { $gt: 40 } }, { age: 55 })
//   .then((res) => {
//     console.log(res);
//   }).catch((err) => {
//     console.log(err);
//   });

/**
 * UPDATE -
 * i. Model.findOneAndUpdate()
 * ii. Model.findByIDAndUpdate()
 */

// User.findOneAndUpdate({ name: "Adam" }, { age: 35 }, { new: true })
//   .then((res) => {
//     console.log(res);
//   }).then((err) => {
//     console.log(err);
//   })

// User.findByIdAndUpdate('65814dd44b9cdc3dc0bbe0c9', { age: 37 }, { new: true })
//   .then((res) => {
//     console.log(res);
//   }).then((err) => {
//     console.log(err);
//   })

/**
 * DELETE -
 * Model.deleteOne()
 * Model.deleteMany()
 * 
 * But it doesnot show the object deleted in the 'res' object
 */

// User.deleteOne({ name: "Adam" }).then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

User.deleteMany({ age: 32 }).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
}); 

/**
 * To overcome the 'res' object drawback we use the functions -
 * Model.findByIdAndDelete()
 * Model.findOneAndDelete()
 */

/**
 * Schema Validation - Basically, Rules for Schema 
 * Refer to book.js file
 */
