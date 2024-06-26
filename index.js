const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/" , (req,res) =>{
   res.render("home.ejs");
});

app.get("/hello" , (req,res) =>{
    res.send("hello");
 });

 
app.get("/ig/:username" , (req,res) =>{
   let {username}= req.params;
    const instadata = require("./data.json");
    data=instadata[username];
    console.log(data)
    res.render("instagram.ejs" ,{ data:instadata[username]})
 });

 app.get("/rolldice" , (req,res) =>{
    let code =Math.floor(Math.random() *6)
    res.render("rolldice.ejs" ,{code});
 });

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});