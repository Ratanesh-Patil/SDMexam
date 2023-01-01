const express=require("express");
const app=express();
const bodyparser=require("body-parser");

app.use(bodyparser.urlencoded({extended:false}));

app.get("/",(req,resp)=>{
    resp.send("<h1>Welcome to Iacsd</h1>");
});

app.get("/form",(req,resp)=>{
    resp.sendFile("public/index.html",{root:__dirname});
});




app.listen(3000);
console.log("server is running on port 3000");