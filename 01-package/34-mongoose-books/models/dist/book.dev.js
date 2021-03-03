"use strict";

var _this = void 0;

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  genre: [{
    type: Schema.Types.ObjectId,
    ref: 'Genre'
  }]
});
BookSchema.virtual('url').get(function () {
  return "catalog/book/".concat(_this._id); // тут будет  app.get('catalog/book/1234)
});
module.exports = mongoose.model('Book', BookSchema);