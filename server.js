var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
 
var app = express();
var port = process.env.PORT || 8080;

app.get('/',function(req,res,next){
   res.sendFile('index.html',{ root : __dirname}) ;
});

app.post('/upload', upload.single('file'), function (req, res, next) {
    var fil ={};
    fil.size = req.file.size;
    res.send(fil);
});

app.listen(port);