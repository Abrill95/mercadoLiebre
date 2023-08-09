const express= require("express");
const app = express()

const path = require("path");

app.listen(port, ()=> console.log("servidor escuchando en el puerto 3001"))

app.use(express.static("public"));

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/contactame", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/contacto.html"));
});
