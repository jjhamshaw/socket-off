var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET switches details. */
router.get('/sockets', function(req, res, next) {
  var sockets = [
    { id: 1, name: '(s) lava lamp' },
    { id: 2, name: '(s) side light' },
    { id: 3, name: '(s) floor lamp' },
    { id: 4, name: '(s) fairy lights' },
    { id: 0, name: '(s) All' }
  ];
  res.send(sockets);
});

// PUT sockets/:socket_id/
router.put('/sockets/:socket_id', function(req, res, next) {
  var response;

  switch (req.body.state) {
    case 1:
      response = 'turning socket on (' + req.params.socket_id + ')';
      break;
    case 0:
      response = 'turning socket off (' + req.params.socket_id + ')';
      break;
    default:
      var msg = 'Error, bad request :(';
      console.log(msg);
      response = msg;
      break;  
  }
  
  res.send(response);
});



module.exports = router;
