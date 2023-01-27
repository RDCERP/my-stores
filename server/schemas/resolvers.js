import { AuthenticationError } from 'apollo-server-express';
import { User, Post } from '../models/index.js';
import { signToken } from '../utils/auth.js';

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('posts')
          .populate('friends');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () =>
      User.find()
        .select('-__v -password')
        .populate('posts')
        .populate('friends'),
    user: async (parent, { id }) => {
      const params = id ? { _id: id } : {};
      return User.findOne(params)
        .select('-__v -password')
        .populate('posts')
        .populate('friends');
    },
    posts: async (parent, { userId }) => {
      const params = userId ? { userId } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { id }) => Post.findOne({ _id: id }),
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addPost: async (parent, args, context) => {
      if (context.user) {
        const post = await Post.create({ ...args, userId: context.user._id });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { posts: post._id } },
          { new: true }
        );

        return post;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate('friends');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    removeFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { friends: friendId } },
          { new: true }
        ).populate('friends');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    addComment: async (parent, { postId, commentText }, context) => {
      if (context.user) {
        const updatedPost = await Post.findOneAndUpdate(
          { _id: postId },
          {
            $push: {
              comments: { commentText, commentAuthor: context.user._id },
            },
          },
          { new: true, runValidators: true }
        ).populate('comments.commentAuthor');

        return updatedPost;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

export default resolvers;
