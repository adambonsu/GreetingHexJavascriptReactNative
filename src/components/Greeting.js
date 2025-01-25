import React from "react";
import { StyleSheet, Text, View } from "react-native";
const {
  StringUserInterface,
  GreetingService,
} = require("@adambonsu/greeting-hex-javascript");

export default function Greeting() {
  let greeting = "";
  try {
    const userInterface = new StringUserInterface();
    const greetingService = new GreetingService(userInterface);
    greeting = greetingService.greet();
  } catch (error) {
    console.error(error);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text} accessibilityLabel="greeting" testID="greeting">
        {greeting}
      </Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
