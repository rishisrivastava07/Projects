const mongoose = require("mongoose");
const { Schema } = mongoose; // used for relationship between two collections

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}
/**
 * one to few - (Approach 1)
 * store the child document inside parent
 */

const userSchema = new Schema({
  username: String,
  addresses: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
  let user1 = new User({
    username: "sherlockholems",
    addresses: [
      {
        // address 1
        location: "221B Baker Street",
        city: "London",
      },
    ],
  });

  // address 2
  user1.addresses.push({ location: "P32 WallStreet", city: "London" });

  let result = await user1.save();
  console.log(result);
};

addUsers();

/**
 * One to Many - (Approach 2)
 * Store a reference to the child document inside parent
 * Refer to customer.js
 */

/**
 * One to Many - (Approach 3) - one to squillions
 * Store a reference to the parent document inside child
 */
