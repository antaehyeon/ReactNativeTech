import React, { useState } from "react";
import { View, Text, Dimensions, SafeAreaView } from "react-native";
import { Actions } from "react-native-router-flux";
import { Button } from "react-native-elements";
import { TextField } from "react-native-material-textfield";
import { useLazyQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import LottieView from "lottie-react-native";

import Loading from "./Loading";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

console.log("deviceWidth", deviceWidth);
console.log("deviceHeight", deviceHeight);

const QUERY_EMAIL_LOGIN = gql`
  query signinByEmail($email: String!, $password: String!, $deviceToken: String!) {
    signinByEmail(email: $email, password: $password, device_token: $deviceToken) {
      id
    }
  }
`;

const navigateScreen1 = () => {
  Actions.subScreen();
};

const jumpScreen1Tab = () => Actions.jump("screen1");

const Main = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingMode, setLoadingMode] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [loginEmailLazyQuery, { loading, data, error }] = useLazyQuery(QUERY_EMAIL_LOGIN);

  const loginEmail = () => {
    const loginVariables = {
      variables: {
        email,
        password,
        deviceToken: "test"
      }
    };

    console.log("loginVariables", loginVariables);

    loginEmailLazyQuery(loginVariables);
  };

  console.log("[useLazyQuery] loading, data, error", { loading, data, error });

  if (loading) {
    if (!loadingMode) setLoadingMode(true);
  }
  if (error) {
    if (loadingMode) setLoadingMode(false);
  }
  if (data) {
    if (loadingMode) setLoadingMode(false);
    if (!isLogin) setIsLogin(true);
    console.log("data", data);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loadingMode && (
        <View
          style={{
            position: "absolute",
            width: 80,
            height: 80,
            left: deviceWidth / 2 - 40,
            top: deviceHeight / 2 - 40,
            zIndex: 1
          }}
        >
          <LottieView source={require("../assets/animation/10343-loading.json")} autoPlay loop></LottieView>
        </View>
      )}
      <Text>Main Screen</Text>
      <Button title="navigate screen 1" onPress={navigateScreen1}></Button>
      <Button title="jump screen 1 tab" onPress={jumpScreen1Tab}></Button>
      <Button title="loading screen" onPress={() => Actions.loading()}></Button>
      <TextField label="이메일" keyboardType="email-address" onChangeText={setEmail} />
      <TextField label="패스워드" keyboardType="default" secureTextEntry onChangeText={setPassword} />
      <Button title="Login" onPress={() => loginEmail()}></Button>
      <Text>{email}</Text>
      <Text>{password}</Text>

      <Text>{`로그인 상태 : ${isLogin ? "ON" : "OFF"}`}</Text>
    </SafeAreaView>
  );
};

export default Main;
