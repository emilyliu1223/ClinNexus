
import express from 'express';
import router from "./router.js";
import bodyParser from "body-parser"
const app=express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
app.use('/',router);


let port=process.env.PORT;
if(port==null || port==""){
    port=5000;
}
app.listen(port, function(){
    console.log("server");
});
