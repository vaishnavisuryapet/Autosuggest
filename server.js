const express= require('express');
const app=express();
const port=3002;
console.log("backend");
app.use(express.static("frontend"));

app.listen(port,function(){
    console.log("sucessfully running at https://localhost:"+port);
});