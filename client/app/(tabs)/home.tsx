import { Colors } from "@/constants/Colors";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export class home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Welcome back! </Text>
        <View style={styles.moodPicker}></View>
      </View>
    );
  }
}

export default home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 24,
    paddingHorizontal: 8,
    padding: 8,
    position: "relative",
    // backgroundColor: "#ad5389",
    // backgroundImage: "linear-gradient(to right, #3c1053, #ad5389)",
  },
  welcome: {
    color: Colors.colors.secondary,
    fontSize: 42,
    marginBottom: 6,
  },
  moodPicker: {
    height: "60%",
    backgroundColor: "rgba(255,255,255,.2)",
  },
});
