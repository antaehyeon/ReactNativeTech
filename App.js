import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from "react-native";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./ApolloClient";

import Main from "./src/Main";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ApolloProvider client={client}>
        <Main></Main>
      </ApolloProvider>
    </>
  );
};

export default App;
