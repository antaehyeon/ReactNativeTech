import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import LottieView from "lottie-react-native";

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      Actions.reset("tabbar");
    }, 1500);
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LottieView source={require("./assets/animation/10431-intro.json")} autoPlay loop></LottieView>
    </View>
  );
};

export default Splash;
