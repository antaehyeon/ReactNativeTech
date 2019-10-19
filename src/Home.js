import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default class Home extends Component {
  static navigationOptions = {
    // Sets the title of the Header
    title: "Home"
  };

  render() {
    return (
      <View>
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
