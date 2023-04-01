const express = require("express");
const app = express();

// middleware - decode JSON data
app.use(express.json());

// TIK DĖL PAVYZDŽIO - duomenų bazė
const todos = [
    {id: 1, task: "Get dressed.", status: false},
    {id: 2, task: "Make bed.", status: false},
    {id: 3, task: "Brush teeth.", status: false},
    {id: 4, task: "Wash face.", status: false},
    {id: 5, task: "Tidy up room.", status: false},
];

/**
 * GET
 * POSTMAN - http://localhost:3000/api/v1/todos
 */
app.get("/api/v1/todos", (req, res) => {
    // Užklausa į DB.
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
 * GET by ID
 * POSTMAN - http://localhost:3000/api/v1/todos/4
 */
app.get("/api/v1/todos/:id", (req, res) => {
    // Užklausa į DB.
    // Tik dėl pavyzdžio
    let todo = todos.find(todo => todo.id == req.params.id);

    res
      .status(200)
      .json({
        status: "success",
        data: {
          todo: todo,
        },
      });
  });

 /**
  * POST
  * POSTMAN - http://localhost:3000/api/v1/todos
  * Įrašyti body!
  */
app.post("/api/v1/todos", (req, res) => {
    // Užklausa į DB - naujo įrašo sukūrimas
    // Tik dėl pavyzdžio
    const newTodo = req.body;
    todos.push(newTodo);

    res
      .status(201)
      .json({
        status: "success",
        data: {
          todos: newTodo,
        },
      });
});

/**
 * PATCH
 */

app.patch("/api/v1/todos/:id", (req, res) => {
    // veiksmai, kurie atnaujina duomenis
    // Tik dėl pavyzdžio
    const newTodos = {id: 5, task: "Tidy up room NOW", status: true};
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
 * POSTMAN - http://localhost:3000/api/v1/todos/4
 */
app.delete("/api/v1/todos/:id", (req, res) => {
    // Užklausa į DB
    // Tik dėl pavyzdžio
    let todos = todos.filter(todo => todo.id != req.params.id);
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
