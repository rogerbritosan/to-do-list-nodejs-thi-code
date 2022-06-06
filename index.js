const express = require("express");
const path = require("path");
const routes = require("../routes/routes");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

// Rotas
app.get("/home", (req, res) => {
  res.render("index");
});

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
