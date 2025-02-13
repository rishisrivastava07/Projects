const mongoose = require("mongoose");
const { Schema } = mongoose; // used for relationship between two collections

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("PRE MIDDLEWARE");
// });

// customerSchema.post("findOneAndDelete", async (customer) => {
//   if (customer.orders.length) {
//     let result = await Order.deleteMany({ _id: { $in: customer.orders } });
//     console.log(result);
//   }
// });

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async () => {
  let cust1 = new Customer({
    name: "Rishi Srivastava",
  });

  let order1 = await Order.findOne({ item: "Chips" });
  let order2 = await Order.findOne({ item: "Chocolates" });

  cust1.orders.push(order1);
  cust1.orders.push(order2);

  let res = await cust1.save();
  console.log(res);
};

// addCustomer();

// const findCustomers = async () => {
//   let result = await Customer.find({}).populate("orders");
//   console.log(result[0]);
// };

// findCustomers();

const addOrders = async () => {
  let res = await Order.insertMany([
    { item: "Samosa", price: 12 },
    { item: "Chips", price: 10 },
    { item: "Chocolates", price: 40 },
  ]);
  console.log(res);
};

// addOrders();

//add customer
// const addCust = async () => {
//   let newCust = await Customer.findById("65884fa527c0eba8d42d663e");

//   let newOrder = new Order({
//     item: "Pastry",
//     price: 50,
//   });

//   newCust.orders.push(newOrder);

//   await newOrder.save();
//   await newCust.save();
//   console.log("customer added");
// };

// addCust();

// delete customer record simply

// const delCust = async () => {
//   let data = await Customer.findByIdAndDelete("65884fa527c0eba8d42d663e");
//   console.log(data);
//   console.log("customer deleted");
// };
// delCust();

/**
 * Handling Deletion - using Mongoose Middleware
 * To handle deletion
 * We can use 2 middlewares :
 * Pre - run before the quwry is executed
 * Post - run after the query is executed
 */
