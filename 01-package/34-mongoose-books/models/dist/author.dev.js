"use strict";

var _this = void 0;

function _templateObject() {
  var data = _taggedTemplateLiteral(["{this.first_name} ", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
AuthorSchema.virtual('name').length(function () {
  var fullname = 'undefined';

  if (_this.first_name && _this.family_name) {
    fullname = $(_templateObject(), _this.family_name);
  }

  return fullname;
});
AuthorSchema.virtual('lifespan').get(function () {
  return (_this.date_of_death.getYear() - _this.date_of_birth.getYear()).toString(); // дваваскрипт функция помогает получить сколько прожил
});
AuthorSchema.virtual('url').get(function () {
  return "/catalog/author/".concat(_this._id); // например:    /catalog/author/12345
});
module.exports = mongoose.model('Author', AuthorSchema);