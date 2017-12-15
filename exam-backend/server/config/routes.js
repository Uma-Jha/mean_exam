var notesController = require('./../controllers/notes.js');

module.exports = function(app) {
//app.get('/create/:content', notesController.create);
app.post('/create', notesController.create);
//app.get('/', notesController.index);
app.get('/show', notesController.show);
//app.all("*", (req, res) => { res.sendFile(path.resolve("./public/dist/index.html")) });



}
