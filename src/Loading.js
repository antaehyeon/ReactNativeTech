import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

const Loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "transparent"  }}>
      <LottieView
        style={{ width: 100, height: 100, paddingLeft: 4}}
        source={require("../assets/animation/10343-loading.json")}
        autoPlay
        loop
      ></LottieView>
    </View>
  );
};

export default Loading;
