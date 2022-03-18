const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const routes = require("./routers/index");
require("dotenv").config();

const app = express();

// Setup view/template engine
app.set("view engine", "ejs");
app.set("views", "views");

const { PORT } = process.env;

// Middleware Array
const middleware = [morgan("dev"), express.static("public"), express.urlencoded({ extended: true }), express.json(), cookieParser()];
app.use(middleware);
console.clear();

app.use(routes);

app.listen(PORT, () => {
	console.log(`Server is Running on ${PORT}`);
});
