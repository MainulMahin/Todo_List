const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];
var workItem =[];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("publis"));

app.get("/", function(req, res){

  var today = new Date();

  var option = {
    weekday : "long" ,
    day : "numeric" ,
    month : "long" ,
  };

var day = today.toLocaleDateString("en-US",option);

  res.render("list", {listItem: day, newListItems: items});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.get("/work", function(req, res){
  res.render("list", {listItem: "WorkList", newListItems: workItem })
});


app.post("/", function(req, res){
console.log(req.body);
  if(req.body.list==="WorkList"){
    var workIt = req.body.newItem;
    workItem.push(workIt);
    res.redirect("/work")
  }else{
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
  }
})

app.listen(3000, function(){
console.log("server is listening at port 3000");
})
