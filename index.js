const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
app.use(express.static(path.join(__dirname,"public/images")));

app.get("/",(req,res) => {
    res.render("home.ejs");
});

app.get("/login",(req,res) => {
    res.render("login.ejs");
});

app.get("/signup",(req,res)=> {
    res.render("signup.ejs");
});

app.get("/about",(req,res)=> {
    res.render("about.ejs");
});

app.get("/resources",(req,res) => {
    res.render("resources.ejs");
});

app.get("/topic",(req,res) => {
    res.render("topic.ejs");
});

app.get("/difficulty",(req,res) => {
    res.render("difficulty.ejs");
});

app.get("/company",(req,res) => {
    res.render("company.ejs");
});

app.listen(port,()=> {
    console.log(`Listening on port ${port}`);
});