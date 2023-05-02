const express = require("express");// Require the Express npm Package

const app = express();//Creating our server named app


app.use(express.static("public"));//Make everything inside public available

app.get("/home", (request, response) => {response.sendFile(__dirname+'/views/home.html')});
app.get("/about", (request, response) => {response.sendFile(__dirname+'/views/about.html')});
app.get("/works", (request, response) => {response.sendFile(__dirname+'/views/works.html')});


//Start the server
app.listen(1991, () => console.log("App is listening on Port 1991"));