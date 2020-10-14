const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  role: {
    type: String,
    required: true,
    trim: true,
    minlength: 5
  },
  position: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 5
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 5
  },
  pictureUrl: {
    type: String,
    required: true,
    trim: true,
  },
  orgId: {
    type: Schema.Types.ObjectId,
    required: true,
    trim: true,
  },
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;