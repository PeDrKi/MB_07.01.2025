import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.text}>Hello, world</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  square: {
    width: 150,
    height: 150,
    backgroundColor: "#008340",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, // Bo góc
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});