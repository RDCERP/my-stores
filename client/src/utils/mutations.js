import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const REGISTER_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postText: String!) {
    addPost(postText: $postText) {
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

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentText: String!) {
    addComment(postId: $postId, commentText: $commentText) {
      _id
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

export const ADD_LIKE = gql`
  mutation addLike($postId: ID!) {
    addLike(postId: $postId) {
      _id
      likeCount
      likes {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const REMOVE_LIKE = gql`
  mutation removeLike($postId: ID!) {
    removeLike(postId: $postId) {
      _id
      likeCount
      likes {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const REMOVE_POST = gql`
  mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
      _id
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($postId: ID!, $commentId: ID!) {
    removeComment(postId: $postId, commentId: $commentId) { 
      _id
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

export const ADD_FRIEND = gql`
  mutation addFriend($friendId: ID!) {
    addFriend(friendId: $friendId) {
      _id
      friendCount
      friends {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const REMOVE_FRIEND = gql`
  mutation removeFriend($friendId: ID!) {
    removeFriend(friendId: $friendId) {
      _id
      friendCount
      friends {
        _id
        firstName
        lastName
      }
    }
  }
`;
