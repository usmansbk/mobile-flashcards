import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { background } from "../utils/colors";

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
    backgroundColor: background,
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
