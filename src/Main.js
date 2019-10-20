import React from "react";
import { View, Text, Button } from "react-native";
import { Actions } from "react-native-router-flux";

const navigateScreen1 = () => {
  Actions.subScreen();
};

const jumpScreen1Tab = () => Actions.jump("screen1");

const Main = () => {
  return (
    <View>
      <Text>Main Screen</Text>
      <Button title="navigate screen 1" onPress={navigateScreen1}></Button>
      <Button title="jump screen 1 tab" onPress={jumpScreen1Tab}></Button>
    </View>
  );
};

export default Main;
