import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Empty({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 8,
  },
  subtitle: {
    textAlign: "center",
  },
});
