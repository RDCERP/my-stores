import { Schema, model } from 'mongoose';
import Comment from './Comment.js';

const PostSchema = new Schema(
  {
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
    location: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
      type: Map,
      of: Boolean,
    },
    comments: [Comment.schema],
  },
  { timestamps: true },
  {
    toJSON: {
      getters: true,
    },
  }
);

PostSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

const Post = model('Post', PostSchema);
export default Post;
