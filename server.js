const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();

var user = "";

app.use(bodyParser.urlencoded({extended:true}));

const questions = [{quesNumber : 1 , question : 'What is your favourite colour?', images :['c1.PNG','c2.png','c3.png','c4.png'],audio : 'Q1.m4a'},
{quesNumber : 2 , question : 'What is your favourite colour?', images : ['B1.PNG','B2.PNG','B3.PNG','B4.PNG'],audio : 'horse.mp3'},
{quesNumber : 3 , question : 'What is your favourite colour?', images : ['L1.PNG','L2.PNG','L3.PNG','L4.PNG'],audio : 'Lion.m4a'},
{quesNumber : 4 , question : 'What is your favourite colour?', images : ['E1.PNG','E1.PNG','E1.PNG','E2.PNG'],audio : 'horse.mp3'},
{quesNumber : 5 , question : 'What is your favourite colour?', images : ['F1.PNG','F2.PNG','F3.PNG','F4.PNG'],audio : 'horse.mp3'},
{quesNumber : 6 , question : 'What is your favourite colour?', images : ['D1.PNG','D2.PNG','D3.PNG','D4.PNG'],audio : 'horse.mp3'},
{quesNumber : 7 , question : 'What is your favourite colour?', images : ['G1.PNG','G2.PNG','G3.PNG','G4.PNG'],audio : 'horse.mp3'},
{quesNumber : 8 , question : 'What is your favourite colour?', images : ['H1.PNG','H2.PNG','H3.PNG','H4.PNG'],audio : 'horse.mp3'},
{quesNumber : 9 , question : 'What is your favourite colour?', images : ['I1.PNG','I2.PNG','I3.PNG','I4.PNG'],audio : 'horse.mp3'},
{quesNumber : 10, question : 'What is your favourite colour?', images : ['J1.PNG','J2.PNG','J3.PNG','J4.PNG'],audio : 'horse.mp3'},
{quesNumber : 11, question : 'What is your favourite colour?', images : ['K1.PNG','K2.PNG','K3.PNG','K4.PNG'],audio : 'Q1.m4a'},
{quesNumber : 12, question : 'What is your favourite colour?', images : ['M1.PNG','M2.PNG','M3.PNG','M4.PNG'],audio : 'horse.mp3'},
{quesNumber : 13, question : 'What is your favourite colour?', images : ['N1.PNG','N2.PNG','N3.PNG','N4.PNG'],audio : 'Lion.m4a'},
{quesNumber : 14, question : 'What is your favourite colour?', images : ['R1.PNG','R1.PNG','R1.PNG','R2.PNG'],audio : 'horse.mp3'},
{quesNumber : 15, question : 'What is your favourite colour?', images : ['P1.PNG','P2.PNG','P3.PNG','P4.PNG'],audio : 'horse.mp3'},
{quesNumber : 16, question : 'What is your favourite colour?', images : ['Q1.PNG','Q2.PNG','Q3.PNG','Q4.PNG'],audio : 'horse.mp3'},
{quesNumber : 17, question : 'What is your favourite colour?', images : ['A1.PNG','A2.PNG','A3.PNG','A4.PNG'],audio : 'horse.mp3'},
{quesNumber : 18, question : 'What is your favourite colour?', images : ['O1.PNG','O2.PNG','O3.PNG','O4.PNG'],audio : 'horse.mp3'},
{quesNumber : 19, question : 'What is your favourite colour?', images : ['S1.PNG','S2.PNG','S3.PNG','S4.PNG'],audio : 'horse.mp3'},
{quesNumber : 20, question : 'What is your favourite colour?', images : ['T1.PNG','T2.PNG','T3.PNG','T4.PNG'],audio : 'horse.mp3'},
];


const answers = [{quesNumber : 1, answer : 'A'},
{quesNumber : 2, answer : 'A'},
{quesNumber : 3, answer : 'A'},
{quesNumber : 4, answer : 'A'},
{quesNumber : 5, answer : 'A'},
{quesNumber : 6, answer : 'A'}];

app.use(express.static('public'));

app.get("/",function(req,res)
{
    res.render("home.ejs");
});

app.post("/results",function(req,res)
{
    var body = req.body;
    res.render("results.ejs",{answers : body});
    res.send("Hii , There are results!");
    //res.render("results.ejs",{answers : answers , user:user});
});

app.post("/testStarted",function(req,res){
    var name = req.body.name;
    user = name;
    res.render("test.ejs",{questions : questions , name:name , answers : answers});
});

app.listen(3000,function(){
    console.log("server working");
});

