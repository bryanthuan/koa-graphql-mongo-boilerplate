const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const todoSchema = new mongoose.Schema({
   text: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
  },
  dismissed: {
      type: Boolean,
      default: false
  },
  createdAt: {
     type: Date,
     default: new Date()
  },
  updatedAt: {
   type: Date,
   default: null
   }
});


module.exports = mongoose.model('Todo', todoSchema);
