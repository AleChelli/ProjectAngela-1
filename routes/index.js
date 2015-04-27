var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.post('/command',function(req,res){
	//Il socket connesso alle board ed ai dispositivi client
	var socket = req.app.get('socket');

	var cmd = req.body.cmd;
	
	socket.emit('angela.command',cmd)
//In realtà dovrei emittare solo alla raspberry collegata alla sessione dell'utente loggato che mi manda messaggini
//Ma stiamo testando perdiana
res.send()
})
module.exports = router;
