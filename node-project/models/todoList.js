var mongoose = require('mongoose');

var todoListSchema = new mongoose.Schema({
  list_name: String,
  list_desc: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('List', todoListSchema);