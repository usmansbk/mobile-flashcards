import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export default function Button({ children, onPress, disabled, secondary }) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, styles.primary, disabled && styles.disabled]}
    >
      <Text style={[styles.text]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
    borderRadius: 4,
  },
  text: {
    fontSize: 24,
    color: "white",
  },
  primary: {
    backgroundColor: "tomato",
  },
  disabled: {
    backgroundColor: "#d3d3d3",
  },
});
