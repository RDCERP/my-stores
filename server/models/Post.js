const { Schema,  model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');


// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const postSchema = new Schema({
  postText: {
    type: String,
    required: 'Tell us how you really feal',
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },
  username: {
    type: String
  },
  likes: {
    type: Object
  },
  comments: [commentSchema],

  userPicturePath: {
    type: String
  },
  picturePath: {
    type: String
  }
});

postSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Post = model('Post', postSchema);

module.exports = postSchema;
