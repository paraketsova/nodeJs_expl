"use strict";

var _this = void 0;

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var AuthorSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    maxlength: 100
  },
  family_name: {
    type: String,
    required: true,
    maxlength: 100
  },
  date_of_birth: {
    type: Date
  },
  date_of_death: {
    type: Date
  }
});
AuthorSchema.virtual('name').get(function () {
  var fullname = 'undefined';

  if (_this.first_name && _this.family_name) {
    fullname = "".concat(_this.first_name, " ").concat(_this.family_name);
  }

  return fullname;
});
AuthorSchema.virtual('lifespan').get(function () {
  return (_this.date_of_death.getYear() - _this.date_of_birth.getYear()).toString();
});
AuthorSchema.virtual('url').get(function () {
  return "/catalog/author/".concat(_this._id);
});
module.exports = mongoose.model('Author', AuthorSchema);