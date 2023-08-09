const express= require("express");
const app = express()

const path = require("path");
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log("servidor escuchando en el puerto 3000"));

app.use(express.static("public"));

app.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/register", (_req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"));
});

app.get("/login", (_req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"));
});
