import React, { Component } from 'react';
import client from '../graphql';
import Page from './page';
import { ApolloProvider, } from "react-apollo";


export default class Index extends Component {
  render() {
    return (
      <ApolloProvider client = { client }>
        <Page />
      </ApolloProvider>
    )
  }
}