const express = require("express");
const app = express();

// middleware - decode JSON data
app.use(express.json());


/**
 * GET
 */
const todos = [{id: 1}, {id: 2}];
app.get("/api/v1/todos", (req, res) => {
  res
    .status(200)
    .json({
      status: "success",
      results: todos.length,
      data: {
        todos: todos,
      },
    });
});
 /**
  * POST
  */
app.post("/api/v1/todos", (req, res) => {
  console.log(req.body);
  res.status(201).send("Data is send.")
});

/**
 * PATCH
 */
// Tik dėl pavyzdžio
const newTodos = {id: 5, task: "Lorem ipsum 5", status: true};
app.patch("/api/v1/todos/:id", (req, res) => {
  // veiksmai, kurie atnaujina duomenis
  res
    .status(200)
    .json({
        status: "success",
        data: {
            todos: newTodos,
        }
    })
});

/**
 * PUT
 */
app.put("/api/v1/todos/:id", (req, res) => {
  // veiksmai, kurie atnaujina duomenis
  res
    .status(200)
    .json({
        status: "success",
        data: {
            todos: newTodos,
        }
    })
});

/**
 * DELETE
 */
app.delete("/api/v1/todos/:id", (req, res) => {
  res
    .status(204)
    .json({
      status: "success",
      data: null
    })
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

