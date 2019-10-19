import React from "react";
import { View, Text } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";

const navigateFirstScreen = navigation => {
  navigation.navigate("Screen1");
};

const Main = ({ navigation }) => {
  return (
    <ThemeProvider>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="Screen1" onPress={() => navigateFirstScreen(navigation)}></Button>
      </View>
    </ThemeProvider>
  );
};

Main.navigationOptions = {
  title: "Main"
};

export default Main;
