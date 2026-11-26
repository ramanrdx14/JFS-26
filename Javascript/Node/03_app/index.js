const express = require("express");
const { getConnection } = require("./db.js");
const app = express();
let connection = null;

// Inbuilt Middlewares : it is just a function
// ye static files ko render karne ke liye hota hai
app.use(express.static("public"));

// ye express ko btata hai ki request body mai json format ka he data-ayega
// agar isko use ni karenge then undefined.
app.use(express.json());

app.get("/", (req, resp) => {
  resp.send("Home Page");
});

const getResultSetData = async () => {
  let result = null;
  try {
    connection = await getConnection();
    [result] = await connection.query("select * from employee");
  } catch (error) {
    console.log(error);
  }
  return result;
};

app.get("/users", async (req, resp) => {
  resp.status(210).send(await getResultSetData());
  await connection.close();
});

// custom middleware

const log = (req, resp, next) => {
  console.log(`Request is comming from........`);
  next();
};

// custom middleware  provide kardiye 2nd parameter in http methods
app.post("/employee", log, (req, resp) => {
  console.log(req.body);
  resp.status(200).send();
});

app.listen(3000, () => {
  console.log("Server is running ...");
});
