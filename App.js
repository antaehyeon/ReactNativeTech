import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
// import Icon from "react-native-vector-icons/AntDesign";
import { Icon } from "react-native-elements";

import MainScreen from "./src/Main";
import HomeScreen from "./src/Home";
import Screen1 from "./src/Screen1";
import Screen2 from "./src/Screen2";
import Screen3 from "./src/Screen3";

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
  MainScreen: MainScreen,
  Screen1: Screen1
});

const BottomNavigator = createMaterialBottomTabNavigator(
  {
    Default: AppNavigator,
    Screen2: Screen2,
    Screen3: Screen3
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        console.log(routeName, focused, horizontal, tintColor);

        if (routeName === "Default") return <Icon name="home" type="foundation" color={tintColor}></Icon>;
        if (routeName === "Screen2") return <Icon name="upload" type="feather" color={tintColor}></Icon>;
        if (routeName === "Screen3") return <Icon name="setting" type="antdesign" color={tintColor}></Icon>;

        // let IconComponent = Ionicons;
        // let iconName;
        // if (routeName === "Default") {
        //   iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        //   // Sometimes we want to add badges to some icons.
        //   // You can check the implementation below.
        //   // IconComponent = HomeIconWithBadge;
        // } else if (routeName === "Settings") {
        //   iconName = `ios-options`;
        // }

        // // You can return any component that you like here!
        // return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    })
  }
);

const App = createAppContainer(BottomNavigator);

export default App;
