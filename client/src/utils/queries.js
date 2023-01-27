import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query posts($id: ID) {
    posts(_id: $id) {
      _id
      postText
      createdAt
      username
      commentCount
      comments {
        _id
        commentText
        createdAt
        firstName
        lastName
      }
    }
  }
`;

export const QUERY_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      postText
      createdAt
      username
      commentCount
      comments {
        _id
        commentText
        createdAt
        firstName
        lastName
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(_id: $id) {
      _id
      firstName
      lastName
      email
      posts {
        _id
        postText
        createdAt
        commentCount
        comments {
          _id
          commentText
          createdAt
          firstName
          lastName
        }
      }
      friendCount
      friends {
        _id
        firstName
        lastName
      }
    }
  }
`;


export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      email
      posts {
        _id
        postText
        createdAt
        commentCount
        comments {
          _id
          commentText
          createdAt
          firstName
          lastName
      }
      friendCount
      friends {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      firstName
      lastName
      email
      posts {
        _id
        postText
    }
  }
`;