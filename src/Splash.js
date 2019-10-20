import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Actions } from "react-native-router-flux";

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      Actions.reset("tabbar");
    }, 1500);
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default Splash;
