const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
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
    enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], 
    default: 'Mainrenance'
  },
  due_back: {
    type: Date,
    default: Date.now()
  }
})

BookInstanceSchema
  .virtual('url')
  .get(() => {
    return `catalog/bookinstance/${this._id}` // тут будет  app.get('catalog/bookinstance/1234)
  })

module.exports = mongoose.model('BookInstance', BookInstanceSchema)