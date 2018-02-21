var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var todoSchema = new Schema({
    title:  String,
    completed: Boolean,
    createdAt: String
  }, {
    versionKey: false // You should be aware of the outcome after set to false
});

  module.exports = mongoose.model('todos', todoSchema);