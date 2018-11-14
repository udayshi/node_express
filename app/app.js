var express = require('express')
var app = express();
app.use('/public', express.static('public'))
app.set('view engine', 'ejs');


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world');
});
app.get('/tpl',function(req,res){
    res.render('tpl/index',{name:'uday'});
});

app.get('/json',function(req,res){
    res.setHeader('Content-Type', 'application/json');
    var data=[{name:'uday',age:40},
              {name:'bijay',age:30}];
    res.write(JSON.stringify(data));

});

app.listen(8080,function(){
    console.log('Express on listing 8080');
});
