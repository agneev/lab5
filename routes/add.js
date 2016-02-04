var data = require("../data.json");

exports.addFriend = function(req, res) {
var newFriend = JSON.parse('{"name":"'+
							req.query.name+'","description":"'+req.query.description+'","imageURL":"'+'http://lorempixel.com/400/400/people"}');
							data["friend"].push(newFriend);
							res.render('add',newFriend);   
	// Your code goes here
}}