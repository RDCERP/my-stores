import { Schema, model } from 'mongoose';

const CommentSchema = new Schema(
  {
    commentText: {
      type: String,
      required: true,
      maxLength: 280,
    },
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Comment = model('Comment', CommentSchema);
export default Comment;
