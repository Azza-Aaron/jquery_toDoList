require("dotenv").config();

const {
  insertQuery,
  formatInsertArray,
  query,
  addingIfNoID,
} = require("./database/preparedQueries.js");

const { client } = require("./database/database.js");

const path = require("path");

client.connect();

const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "./public")));

app.get("/", async (req, res) => {
  console.log("todo list live");
  res.render("index");
});

app.get("/api/todo", async (req, res) => {
  try {
    const list = await client.query(query).then((result) => result.rows);
    res.send(list);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.send({ err: "something went wrong" });
  }
});

app.use(express.json());

// POST is for creating a new resource
// add endpoints for PATCH, DELETE to perform other operations
app.post("/api/todo", async (req, res) => {
  try {
    console.log(req.body);

    await addingIfNoID(req, client);
    const table = "todo.public.todo_table";
    //await client.query("DELETE FROM todo.public.todo_table");
    await client.query(`UPDATE ${table} SET`);

    //await formatInsertArray(req, client);
    res.json(req.body);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.send({ err: "something went wrong" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server Started at Port");
});
