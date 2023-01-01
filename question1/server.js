var express=require("express");
var app=express();
var bodyparser=require("body-parser");
var memparr=require("./moduleemparr");

app.use(bodyparser.urlencoded({extended:false}));

app.get("/",(req,resp)=>{
    resp.send("<h1>Welcome To Ratneshs Page");
});

app.get("/form",(req,resp)=>{
    resp.sendFile("public/index.html",{root:__dirname});
});

app.get("/empdata",(req,resp)=>{
    if(req.query.btn==="add"){
        var id=parseInt(req.query.id);
        var name=req.query.name;
        var desg=req.query.desg;
        var ob={id,name,desg}
        memparr.insertEmp(ob);
        resp.send("<h1>Added successfully");
        
    }else{
        var id=req.query.id;
        var ob=memparr.searchEmp(id);
        if(ob!=null){
            resp.send(JSON.stringify(ob));
        }else{
            resp.send("employee not found");
        }
    }
});
app.listen(3030);
console.log("server started on 3030");

