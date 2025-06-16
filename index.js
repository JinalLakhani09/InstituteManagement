const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json())

//models export start
const institute = require("./models/institute");
const board = require("./models/board");
const category = require("./models/category");
const medium = require("./models/medium.js");
const standard = require("./models/standard");
const subject = require("./models/subject");
const degree = require("./models/degree");
const exam = require("./models/exam");
const university = require("./models/university");
const institute_registration = require("./models/institute_registration");


//models export end

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//institutemanagement
//pWSBFFPjlLnKZQ7L

mongoose.connect("mongodb+srv://institutemanagement:pWSBFFPjlLnKZQ7L@cluster0.nkrmlnm.mongodb.net/").then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.post("/create/institute", async (req, res) => { // institute creation api
  try {
   const lastinstitute = await institute.find().sort({ id: -1 }).limit(1);
    var id = 1;
    if(lastinstitute.length !== 0){
        id = lastinstitute[0].id + 1;
    }
   var data ={
    name: req.body.name,
    id: id
    }

    const newinstitute = await new institute(data).save()
    var message = "Institute created successfully";
    var status = 201;
     if(!newinstitute){
        message = "Institute not created";
        status = 400;
     }

    res.json({
      status: status,
      message: message,
      data: newinstitute
    });
  } catch (error) {
    console.error("Error creating institute:", error);
     res.json({
      status: 500,
      message: "Internal Server Error",
      data: {}
    });
  }
});

app.post("/create/board", async (req, res) => { // board master creation api
  try {
   const lastboard = await board.find().sort({ id: -1 }).limit(1);
    var id = 1;
    if(lastboard.length !== 0){
        id = lastboard[0].id + 1;
    }
   var data ={
    name: req.body.name,
    id: id
    }

    const newBoard = await new board(data).save()
    var message = "Board created successfully";
    var status = 201;
     if(!newBoard){
        message = "Board not created";
        status = 400;
     }

    res.json({
      status: status,
      message: message,
      data: newBoard
    });
  } catch (error) {
    console.error("Error creating institute:", error);
     res.json({
      status: 500,
      message: "Internal Server Error",
      data: {}
    });
  }
});

app.post("/create/category", async (req, res) => { // category creation api
  try {
   const lastcategory = await category.find().sort({ id: -1 }).limit(1);
    var id = 1;
    if(lastcategory.length !== 0){
        id = lastcategory[0].id + 1;
    }
   var data ={
    name: req.body.name,
    id: id
    }

    const newcategory = await new category(data).save()
    var message = "Category created successfully";
    var status = 201;
     if(!newcategory){
        message = "Category not created";
        status = 400;
     }

    res.json({
      status: status,
      message: message,
      data: newcategory
    });
  } catch (error) {
    console.error("Error creating Category:", error);
     res.json({
      status: 500,
      message: "Internal Server Error",
      data: {}
    });
  }
});

app.post("/create/medium", async (req, res) => { // meduim creation api
  try {
   const lastmedium = await medium.find().sort({ id: -1 }).limit(1);
    var id = 1;
    if(lastmedium.length !== 0){
        id = lastmedium[0].id + 1;
    }
   var data ={
    name: req.body.name,
    id: id
    }

    const newmedium = await new medium(data).save()
    var message = "Medium created successfully";
    var status = 201;
     if(!newmedium){
        message = "Medium not created";
        status = 400;
     }

    res.json({
      status: status,
      message: message,
      data: newmedium
    });
  } catch (error) {
    console.error("Error creating Medium:", error);
     res.json({
      status: 500,
      message: "Internal Server Error",
      data: {}
    });
  }
});

app.post("/create/standard", async (req, res) => { // standard creation api
  try {
   const laststandard = await standard.find().sort({ id: -1 }).limit(1);
    var id = 1;
    if(laststandard.length !== 0){
        id = laststandard[0].id + 1;
    }
   var data ={
    name: req.body.name,
    id: id
    }

    const newsubject = await new standard(data).save()
    var message = "Standard created successfully";
    var status = 201;
     if(!newstandard){
        message = "Standard not created";
        status = 400;
     }

    res.json({
      status: status,
      message: message,
      data: newstandard
    });
  } catch (error) {
    console.error("Error creating Standard:", error);
     res.json({
      status: 500,
      message: "Internal Server Error",
      data: {}
    });
  }
});

app.post("/create/subject", async (req, res) => { // subject creation api
  try {
   const lastsubject = await subject.find().sort({ id: -1 }).limit(1);
    var id = 1;
    if(lastsubject.length !== 0){
        id = lastsubject[0].id + 1;
    }
   var data ={
    name: req.body.name,
    id: id
    }

    const newsubject = await new subject(data).save()
    var message = "subject created successfully";
    var status = 201;
     if(!newsubject){
        message = "subject not created";
        status = 400;
     }

    res.json({
      status: status,
      message: message,
      data: newsubject
    });
  } catch (error) {
    console.error("Error creating subject:", error);
     res.json({
      status: 500,
      message: "Internal Server Error",
      data: {}
    });
  }
});

app.post("/create/degree", async (req, res) => { // subject creation api
  try {
   const lastdegree = await degree.find().sort({ id: -1 }).limit(1);
    var id = 1;
    if(lastdegree.length !== 0){
        id = lastdegree[0].id + 1;
    }
   var data ={
    name: req.body.name,
    id: id
    }

    const newdegree = await new degree(data).save()
    var message = "degree created successfully";
    var status = 201;
     if(!newdegree){
        message = "degree not created";
        status = 400;
     }

    res.json({
      status: status,
      message: message,
      data: newdegree
    });
  } catch (error) {
    console.error("Error creating degree:", error);
     res.json({
      status: 500,
      message: "Internal Server Error",
      data: {}
    });
  }
});

app.post("/create/exam", async (req, res) => { // subject creation api
  try {
   const lastexam = await exam.find().sort({ id: -1 }).limit(1);
    var id = 1;
    if(lastexam.length !== 0){
        id = lastexam[0].id + 1;
    }
   var data ={
    name: req.body.name,
    id: id
    }

    const newexam = await new exam(data).save()
    var message = "Exam created successfully";
    var status = 201;
     if(!newexam){
        message = "Exam not created";
        status = 400;
     }

    res.json({
      status: status,
      message: message,
      data: newexam
    });
  } catch (error) {
    console.error("Error creating Exam:", error);
     res.json({
      status: 500,
      message: "Internal Server Error",
      data: {}
    });
  }
});

app.post("/create/university", async (req, res) => { // subject creation api
  try {
   const lastuniversity = await university.find().sort({ id: -1 }).limit(1);
    var id = 1;
    if(lastuniversity.length !== 0){
        id = lastuniversity[0].id + 1;
    }
   var data ={
    name: req.body.name,
    id: id
    }

    const newuniversity = await new university(data).save()
    var message = "University created successfully";
    var status = 201;
     if(!newuniversity){
        message = "University not created";
        status = 400;
     }

    res.json({
      status: status,
      message: message,
      data: newuniversity
    });
  } catch (error) {
    console.error("Error creating University:", error);
     res.json({
      status: 500,
      message: "Internal Server Error",
      data: {}
    });
  }
});

app.post("/institute/register", async (req, res) => { // subject creation api
  try {
  var data = req.body;
  const newregistration = await new institute_registration(data).save()
    var message = "Institute Registration successfully";
    var status = 201;
     if(!newregistration){
        message = "Institute Registration not successfully";
        status = 400;
     }

    res.json({
      status: status,
      message: message,
      data: newregistration
    });
  } catch (error) {
    console.error("Error in Institute Registration :", error);
     res.json({
      status: 500,
      message: "Internal Server Error",
      data: {}
    });
  }
});
