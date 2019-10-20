import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from "react-native";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./ApolloClient";
import { Actions } from "react-native-router-flux";

import Router from "./router/Router";

const App = () => {
  console.log(client);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ApolloProvider client={client}>
        <Router></Router>
      </ApolloProvider>
    </>
  );
};

export default App;
