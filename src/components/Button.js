import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button({ children, onPress, disabled, secondary }) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        secondary ? styles.secondary : styles.primary,
        disabled && styles.disabled,
      ]}
    >
      <Text style={[styles.text, secondary && styles.secondaryText]}>
        {children}
      </Text>
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
  secondaryText: {
    color: "tomato",
  },
  primary: {
    backgroundColor: "tomato",
  },
  secondary: {
    borderColor: "tomato",
    borderWidth: 1,
  },
  disabled: {
    backgroundColor: "#d3d3d3",
  },
});
