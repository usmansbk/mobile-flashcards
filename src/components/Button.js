import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  primary,
  disabled,
  danger,
  background,
  contrastText,
} from "../utils/colors";

export default function Button({
  children,
  onPress,
  disabled,
  secondary,
  danger,
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        secondary ? styles.secondary : styles.primary,
        danger && styles.danger,
        disabled && styles.disabled,
      ]}
    >
      <Text style={[styles.text, secondary && styles.secondaryText]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

export function IconButton({ name, onPress, color }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconButton}>
      <MaterialCommunityIcons name={name} size={30} color={color} />
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
    color: contrastText,
  },
  secondaryText: {
    color: primary,
  },
  primary: {
    backgroundColor: primary,
  },
  secondary: {
    borderColor: primary,
    borderWidth: 1,
  },
  disabled: {
    backgroundColor: disabled,
  },
  danger: {
    backgroundColor: danger,
  },
  iconButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    backgroundColor: background,
    margin: 10,
  },
});
