require("dotenv").config();

const {
  insertQuery,
  formatInsertArray,
  query,
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
app.post("/api/todo", async (req, res, next) => {
  try {
    //todo save to database
    console.log(req.body);
    await client.query("DELETE FROM todo.public.todo_table");
    await formatInsertArray(req, client);
    res.json(req.body);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.send({ err: "something went wrong" });
  }
});

// CRUD
// - CREATE: create a new resource
//// delete all current entries, and insert all new entries
// - READ: read a resource
//// create an /api GET endpoint that returns the list from the database

//skip update/delete
// - UPDATE: update a resource
// - DELETE: delete a resource

// https://www.postgresql.org/
// https://www.npmjs.com/package/pg
// https://www.postgresql.org/docs/15/index.html
//https://www.postgresql.org/docs/current/sql-createrole.html
// https://www.postgresqltutorial.com/postgresql-administration/postgresql-create-database/
//https://www.postgresql.org/docs/15/sql-createtable.html
// https://www.postgresql.org/docs/current/datatype.html
//https://node-postgres.com/features/connecting#programmatic
//https://node-postgres.com/features/queries#prepared-statements
////https://tableplus.com/blog/2018/04/postgresql-how-to-grant-access-to-users.html
//GRANT ALL PRIVILEGES ON DATABASE database_name TO username;

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server Started at Port");
});
