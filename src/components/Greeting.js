import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function Greeting() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} accessibilityLabel="greeting" testID="greeting">
        Yagga!
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
