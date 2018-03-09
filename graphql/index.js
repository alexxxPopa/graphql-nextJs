import ApolloClient from 'apollo-client';
import { HttpLink, InMemoryCache } from 'apollo-client-preset';
import fetch from 'node-fetch';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://graphql.cosmicjs.com/v1', fetch }),
  cache: new InMemoryCache().restore({})
})

export default client;