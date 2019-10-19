import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainScreen from "./src/Main";
import HomeScreen from "./src/Home";
import Screen1 from "./src/Screen1";

// const navigationSplashScreen = () => {
//   console.log("navigationSplashScreen");
// };

// const HomeScreen = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
//           <Header />
//           <ThemeProvider>
//             <Button title="Splash" onPress={navigationSplashScreen}></Button>
//           </ThemeProvider>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter
//   }
// });

const AppNavigator = createStackNavigator({
  Home: {
    screen: MainScreen
  },
  Screen1: {
    screen: Screen1
  }
});

const App = createAppContainer(AppNavigator);

export default App;
