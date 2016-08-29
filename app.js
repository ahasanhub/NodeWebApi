var express=require("express");
var app=express();
var port=process.env.PORT||3000;
app.get('/api',function(req,res){
    var responsejson={Name:"ahasan"};
    res.json(responsejson);
});
app.listen(port,function(){
    console.log("Example app listening on port "+port);
});