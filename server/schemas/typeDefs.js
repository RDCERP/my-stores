const { gql } = require ('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    picturePath: String
    friends: [User]
    location: String
    occupation: String
    viewedProfile: Int
    impressions: Int
    createdAt: String
  }

  type Post {
    _id: ID
    userId: String
    firstName: String
    lastName: String
    location: String
    description: String
    picturePath: String
    userPicturePath: String
    likes: [String]
    comments: [Comment]
    createdAt: String
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
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addPost(description: String!, picturePath: String!): Post
    addComment(postId: ID!, commentText: String!): Post
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
