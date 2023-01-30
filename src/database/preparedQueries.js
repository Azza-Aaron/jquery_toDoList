const insertQuery = (valueArray) => {
  return {
    name: "insert-all-todo",
    text: `INSERT INTO todo.public.todo_table (job, description, date, preserve_class, set_class, list_user, id) 
          VALUES ($1, $2, $3, $4, $5, $6, DEFAULT)`,
    values: valueArray,
  };
};

async function formatInsertArray(req, client) {
  for (let i = 0; i < req.body.length; i++) {
    const key = req.body[i];
    const insertArray = [
      key.job,
      key.description,
      key.date,
      key.preserveClass, //todo make sure this is included in the object
      key.setClass,
      "DEFAULT",
    ];
    const preparedQuery = insertQuery(insertArray);
    await client.query(preparedQuery);
  }
}

// create /api routes for all CRUD operations
const query = {
  name: "select-all-todo",
  text: "SELECT * from todo.public.todo_table where list_user = $1",
  values: ["DEFAULT"],
};

module.exports = {
  insertQuery,
  formatInsertArray,
  query,
};
