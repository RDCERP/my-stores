const { User, Post, Comment } = require('../models');                   // User is a model that has a method called create
const { AuthenticationError } = require('apollo-server-express');       // AuthenticationError is a function that takes in a message and returns an error
const { signToken } = require('../utils/auth');                         // signToken is a function that takes in a user object and returns a token

const resolvers = {                                 // resolvers is an object that has a Query property that is an object with a me property that is a function that takes in parent, args, and context and returns a user object
    Query: {
        me: async (parent, args, context) => {      // me is a function that takes in parent, args, and context and returns a user object
            if (context.user) {                     // if context.user is truthy
                const userData = await              // userData is a variable that is assigned to the result of calling User.findOne with an object that has a _id property that is assigned to context.user._id and a select property that is assigned to a string that is a list of fields to exclude from the query
                    User.findOne({                  // User.findOne is a method that takes in an object that has a _id property that is assigned to context.user._id and a select property that is assigned to a string that is a list of fields to exclude from the query
                        _id: context.user._id
                    })
                        .select('-__v -password')   // .select is a method that takes in a string that is a list of fields to exclude from the query
                        .populate('friends')        // .populate is a method that takes in a string that is a list of fields to populate
                        .populate('posts');

                return userData;                    // UserData is the result of calling User.findOne with an object that has a _id property that is assigned to context.user._id and a select property that is assigned to a string that is a list of fields to exclude from the query
            }
            throw new
                AuthenticationError('Not logged in');
        },

        user: async (parent, {                      // user is a function that takes in parent, args, and context and returns a user object
            username
        }) => {
            return User.findOne
                ({
                    username
                })
                .select('-__v -password')           // .select is a method that takes in a string that is a list of fields to exclude from the query
                .populate('friends')                // .populate is a method that takes in a string that is a list of fields to populate
                .populate('posts');
        },

        users: async () => {                        // users is a function that takes in parent, args, and context and returns an array of user objects
            return User.find()                      // User.find is a method that takes in no arguments and returns an array of user objects
                .select('-__v -password')           // .select is a method that takes in a string that is a list of fields to exclude from the query
                .populate('friends')                // .populate is a method that takes in a string that is a list of fields to populate
                .populate('posts');
        },

        posts: async (parent, {                     // posts is a function that takes in parent, args, and context and returns an array of post objects
            username
        }) => {
            const params = username ? {             // params is a variable that is assigned to an object that has a username property that is assigned to username if username is truthy
                username
            } : {};
            return Post.find(params)                // Post.find is a method that takes in an object that has a username property that is assigned to username if username is truthy and returns an array of post objects
                // .select('-__v')                  // .select is a method that takes in a string that is a list of fields to exclude from the query
                .sort({
                    createdAt: -1
                })                                  // .sort is a method that takes in an object that has a createdAt property that is assigned to -1
            // .populate('comments')
            // .populate('commentCount');          
        },

        comments: async (parent, {                  // comments is a function that takes in parent, args, and context and returns an array of comment objects
            postId
        }) => {
            const params = postId ? {               // params is a variable that is assigned to an object that has a postId property that is assigned to postId if postId is truthy
                postId
            } : {};                                 // params is a variable that is assigned to an object that has a postId property that is assigned to postId if postId is truthy
            return Comment.find(params)             // Comment.find is a method that takes in an object that has a postId property that is assigned to postId if postId is truthy and returns an array of comment objects

        }

    },

    Mutation: {
        addUser: async (parent, args) => {          // addUser is a function that takes in parent, args, and context and returns a user object
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

        addPost: async (parent, args, context) => {         // addPost is a function that takes in parent, args, and context and returns a post object
            if (context.user) {
                const thought = await Post.create({ ...args, username: context.user.username });   

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { posts: post._id } },
                    { new: true }
                );

                return thought;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        addComment: async (parent, { postId, commentText }, context) => {
            if (context.user) {
                const updatedPost = await Post.findOneAndUpdate(
                    { _id: postId },
                    { $push: { comments: { commentText, username: context.user.username } } },
                    { new: true, runValidators: true }
                );

                return updatedPost;
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        addFriend: async (parent, { friendId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { friends: friendId } },
                    { new: true }
                ).populate('friends');

                return updatedUser;

            }
            throw new AuthenticationError('You need to be logged in!');
        },

        deleteUser: async (parent, args, context) => {              // deleteUser is a function that takes in parent, args, and context and returns a user object
            if (context.user) {
                const deletedUser = await User.findOneAndDelete({   // deletedUser is a variable that is assigned to the result of calling User.findOneAndDelete with an argument of an object that has a _id property that is assigned to context.user._id
                    _id: context.user._id
                });

                await Post.deleteMany({                             // Post.deleteMany is a method that takes in an object that has a username property that is assigned to context.user.username
                    username: context.user.username
                });

                return deletedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        }
    }
};



module.exports = resolvers;
