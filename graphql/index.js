import ApolloClient from 'apollo-client';
import { HttpLink, InMemoryCache } from 'apollo-client-preset';
import { toIdValue } from 'apollo-utilities';
import fetch from 'node-fetch';

const dataIdFromObject = ({ __typename, slug, locale}) => __typename + slug + locale;

const cacheRedirects = {
  Query: {
      object: (_, args) =>
          toIdValue(
              dataIdFromObject({ __typename: "Object", slug: args.slug, locale: args.locale}),
          ),
  },
};

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://graphql.cosmicjs.com/v1', fetch }),
  cache: new InMemoryCache({cacheRedirects, 
    dataIdFromObject})
})

export default client;