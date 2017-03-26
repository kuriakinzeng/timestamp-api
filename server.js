var express = require('express');
var moment = require('moment');
var app = express();
var date;

app.get('/:time',function(req,res){
    if(moment(req.params.time, "X").format("X") == req.params.time)
        date = moment(req.params.time,"X")

    if(moment(req.params.time, "MMMM D, YYYY").format("MMMM D, YYYY") == req.params.time)
        date = moment(req.params.time,"MMMM D, YYYY")
    
    if(date)
        return res.json({ "unix": date.format("X"), "natural": date.format("MMMM D, YYYY") });
    
    res.json({ "unix": null, "natural": null });
});

app.listen(8080,function(){
    console.log('Always be listen to 8080');
});