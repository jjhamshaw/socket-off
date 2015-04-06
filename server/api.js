var http = require('http'); 
var express = require('express');

var app = express();

console.log(app);

app.use(express.favicon()); 
app.use(express['static'](__dirname ));

// GET switches
app.get('/switches/', function(req, res){
  var switches = [
    { id: 1, name: '(s) lava lamp' },
    { id: 2, name: '(s) side light' },
    { id: 3, name: '(s) floor lamp' },
    { id: 4, name: '(s) fairy lights' },
    { id: 0, name: '(s) All' }
  ];

  res.send(switches);
});

// Express route for any other unrecognised incoming requests 
app.get('*', function(req, res){ 
  res.send('Unrecognised call', 404);
});  

// Express route to handle errors 
app.use(function(err, req, res, next){ 
  if (req.xhr) { 
    res.send(500, 'Oops, Something went wrong!'); 
  } else { next(err); } 
});

app.listen(3000);
console.log('App Server running at port 3000');
