const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    friends: [User]
    posts: [Post]
    email: String
    password: String
    picturePath: String Ref
    location: String
    occupation: String
    viewedProfile: Number
    impressions: Number

    }

    type Post {
        _id: ID 
        postText: String
        createdAt: String
        username: String
        likes: Object String Ref
        comments: [Comment]
        userPicturePath: String Ref
        picturePath: String Ref
    }

    type Comment {
        _id: ID
        commentText: String
        createdAt: String
        username: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        posts(username: String): [Post]
        post(_id: ID!): Post
        comments(postId: ID!): [Comment]
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!, location: String!, occupation: String!): Auth
        login(email: String!, password: String!): Auth
        addPost(postText: String!): Post
        addComment(postId: ID!, commentText: String!): Post
        addFriend(friendId: ID!): User
        removeFriend(friendId: ID!): User
        addLike(postId: ID!): Post

    }
`;


module.exports = typeDefs;

// Path: server/schemas/resolvers.js
