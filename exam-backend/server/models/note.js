var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  name: String, created_at : { type: Date, default: Date.now }, 
  questions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Question'}]
});
mongoose.model('User', userSchema);

var questionSchema = new mongoose.Schema({
	_user: {type: mongoose.Schema.ObjectId, ref: 'User'},
	content: String,
	option1: '', option2: '', option3: '', option4: '', vote1: 0, vote2: 0, vote3: 0, vote4: 0
});
mongoose.model('Question', questionSchema);