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
  },
  welcome: {
    color: Colors.colors.secondary,
    fontSize: 42,
    marginBottom: 6,
  },
  moodPicker: {
    height: "40%",
    backgroundColor: Colors.colors.secondary,
  },
});
