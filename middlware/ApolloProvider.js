import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
  ApolloLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

const uploadLink = createUploadLink({
  uri: `https://momentum-staging-api-f0042e6f79bc.herokuapp.com/graphql`,
  fetch: fetch,
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: ApolloLink.from([authLink, uploadLink]),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

const ApolloProvider = (props) => {
  return <Provider client={client} {...props} />;
};

export default ApolloProvider;
