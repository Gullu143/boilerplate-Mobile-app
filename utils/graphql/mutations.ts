import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation loginUser(
    $email: String!
    $password: String!
    $rememberMe: Boolean!
  ) {
    loginUser(
      input: {
        loginAttributes: {
          email: $email
          password: $password
          rememberMe: $rememberMe
        }
      }
    ) {
      token
      user {
        id
      }
    }
  }
`;
