import React from "react";
import { render } from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";

import App from "./App";

import "./index.css";


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: "https://graphql.anilist.co/"
  })
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
