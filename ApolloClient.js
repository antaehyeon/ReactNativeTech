import ApolloClient from "apollo-boost";
import { HttpLink } from "apollo-link-http";

export const link = new HttpLink({ uri: "http://ec2-54-180-144-193.ap-northeast-2.compute.amazonaws.com:4000/graphql" });
export const client = new ApolloClient({
  link
});
