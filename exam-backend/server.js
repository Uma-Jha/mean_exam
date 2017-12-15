var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/belt-exam/dist'));
mongoose.connect('mongodb://localhost/survey', err => {
  console.log(err ||  `MongoDB connected`);
})
var Schema = mongoose.Schema;
var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
	username: String, content: String,
	option1: '', option2: '', option3: '', option4: '', vote1: Number, vote2: Number, vote3: Number, vote4: Number, 
	created_at : { type: Date, default: Date.now },
});
var Question = mongoose.model('Question', questionSchema);

app.get('/poll', function(req, res) {
	Question.find({}, function(err, questions) {
		if(err) {
			res.send('Error occurred');
		}
		else {
			res.send(questions);
		}
	})
})

app.post('/poll', function(req, res) {
	var question = new Question(req.body);
	question.save(function(err) {
		if(err) {
			res.send(err)
		  } else {
			res.send('Poll created in DB')
		  }
	})
})
app.post('/poll/delete',function(req, res) {
    Question.remove({_id: req.body._id}, function(err){
      if(err) {
        res.send("Error "+err)
      }
      else {
        res.send({"status":"success"})
      }
    })
	})
	app.get('/poll/:id', function(req, res){
		Question.findOne({ _id: req.params.id }, function(err, result) {
			if (err){
				console.log(err);
			} else {
				res.send(result);
			}
		})
	})
app.listen(8000, function() {
    console.log("listening on port 8000");
})

