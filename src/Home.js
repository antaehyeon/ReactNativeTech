import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

export default class Home extends Component {
  static navigationOptions = {
    // Sets the title of the Header
    title: "Home"
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Article");
          }}
        >
          <Text>Click Here</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
