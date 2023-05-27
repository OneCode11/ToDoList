const express = require("express");
const app = express();
const date = require("./date")
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

let items = [];
let workItems = [];

app.get("/", (req, res) => {
    res.render("index", {listTitle: date.getDate(), newItems: items});
});

app.get("/work", (req, res) => {
    res.render("index", {listTitle: "Work", newItems: workItems});
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.post("/", (req, res) => {
    let newItem = req.body.newActivity;
    if(req.body.list === "Work"){
        workItems.push(newItem);
        res.redirect("/work");
    } else {
        items.push(newItem);
        res.redirect("/");
    }
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});