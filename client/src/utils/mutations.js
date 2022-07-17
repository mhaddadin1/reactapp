import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation Mutation(
    $email: String!
    $password: String!
    $babyName: String!
    $parentName: String!
  ) {
    addUser(
      email: $email
      password: $password
      babyName: $babyName
      parentName: $parentName
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_FEEDING = gql`
  mutation addFeeding($amountData: Int) {
    addFeeding(amountData: $amountData) {
      _id

      feedings {
        _id
        amount
        createdAt
      }
    }
  }
`;
