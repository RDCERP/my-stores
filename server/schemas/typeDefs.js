import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    friendCount: Int
    friends: [User]
    posts: [Post]
  }

  type Post {
    _id: ID
    postText: String
    createdAt: String
    firstName: String
    lastName: String
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    createdAt: String
    commentText: String
    firstName: String
    lastName: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(userId: ID!): User
    posts(username: String): [Post]
    post(postId: ID!): Post
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addPost(postText: String!): Post
    addComment(postId: ID!, commentText: String!): Post
    addFriend(friendId: ID!): User
    removeFriend(friendId: ID!): User
  }
`;

export default typeDefs;
