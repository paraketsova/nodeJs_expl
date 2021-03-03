"use strict";

var _this = void 0;

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var BookInstanceSchema = new Schema({
  book: {
    type: Schema.Types.ObjectId,
    ref: 'Book'
  },
  imprint: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    "enum": ['Available', 'Maintenance', 'Loaned', 'Reserved'],
    "default": 'Mainrenance'
  },
  due_back: {
    type: Date,
    "default": Date.now()
  }
});
BookInstanceSchema.virtual('url').get(function () {
  return "catalog/bookinstance/".concat(_this._id); // тут будет  app.get('catalog/bookinstance/1234)
});
module.exports = mongoose.model('BookInstance', BookInstanceSchema);