/**
 * Faker - to generate fake data
 * install through npm : "npm install --save-dev @faker-js/faker"
 */

/**
 * MySQL2 Package - to connect Node with MySQL
 * connection.end() // to close connection
 *
 * Client <-> server <-> DataBase
 * install package : npm i mysql2
 *
 * to run in CLI :  "mysql -h localhost -P 3306 -u root -p"
 *
 * use : "source filename.sql"
 */

const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const mehtodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

app.use(mehtodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// to insert 100 user data from faker
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "RishiS_#07",
});

// console.log(getRandomUser());

// let query = "SHOW TABLES";
// let users = [
//     ["123b","123_newUserb","abc@gm ail.comb","abcb"],
//     ["123c","123_newUserc","abc@gmail.comc","abcc"]
// ];

// let query = "INSERT INTO user (id, username, email, password) VALUES ?"; // INSERTING new datas

// the data is already added so no need to add again

// let data = [];
// for(let i = 1;  i <= 100; i++){
//     data.push(getRandomUser()); // 100 fake users
// }

// home route
app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (e) {
    res.send("Some error in database");
  }
});

// show route
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let data = result;
      res.render("show.ejs", { data });
    });
  } catch (e) {
    res.send("Some error in database");
  }
});

// edit route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (e) {
    res.send("Some error in database");
  }
});

// update {DB} route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password) {
        res.send("Wrong Password");
      } else {
        let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          else {
            console.log(result);
            res.redirect("/user");
          }
        });
      }
    });
  } catch (e) {
    console.log("error found = ", e);
    res.send("Some error in database");
  }
});

// create new user route
app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/user/new", (req, res) => {
  let { username, email, password } = req.body;
  let id = uuidv4();
  // Query to Insert New User
  let query = `INSERT INTO user (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}')`;
  try {
    connection.query(query, (err, result) => {
      if (err) throw err;
      console.log("added user");
      res.redirect("/user");
    });
  } catch (e) {
    res.send("Some error in database");
  }
});

// delete user route
app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let query = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(query, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete.ejs", { user });
    });
  } catch (e) {
    res.send("Some error in database");
  }
});

app.delete("/user/:id/", (req, res) => {
  let { id } = req.params;
  let { password } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      if (user.password != password) {
        res.send("WRONG Password entered!");
      } else {
        let q2 = `DELETE FROM user WHERE id='${id}'`; //Query to Delete
        connection.query(q2, (err, result) => {
          if (err) throw err;
          else {
            console.log(result);
            console.log("deleted!");
            res.redirect("/user");
          }
        });
      }
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.listen("8080", () => {
  console.log("Server is listening to Port 8080");
});
