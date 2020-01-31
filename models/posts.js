const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schems = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  }
});

module.exports = mongoose.model('Post', schems);