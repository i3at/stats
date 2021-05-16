var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var parser = bodyParser.urlencoded({extended: true});

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);

var taskList = [
    {text: "XXX"},
    {text: "YYY"},
    {text: "ZZZ"}
];

app.get("/", function(req, res) {
    res.render("trangchu");
})

app.get("/bai15", function(req, res){
    res.render("bai15_bt1"  );
})

app.get("/bai16", function(req, res){
    res.render("bai16_bt2"  );
})

app.get("/bai17", function(req, res){
    res.render("bai17_bt3"  );
})

app.get("/bai18", function(req, res){
    res.render("bai18_bt4"  );
})

app.get("/bai19", function(req, res){
    res.render("bai19_bt5"  );
})

app.get("/bai20", function(req, res){
    res.render("bai20"  );
})

app.post("/getNotes", function(req, res){
    res.send(taskList);
})

app.post("/addNotes", parser, function(req, res){
    var newNote = req.body.note;
    console.log(newNote);
    taskList.push(newNote);
    res.send(taskList);
})

app.post("/deleteNote", parser, function(req, res){
    var id = req.body.id;
    console.log("Delete id:", id);
    taskList.splice(id, 1);
    res.send(taskList);
})

app.post("/updateNote", parser, function(req, res){
    var id = req.body.id;
    taskList[id] = {text: req.body.text};
    console.log('new:', taskList);
    res.send(taskList);
})