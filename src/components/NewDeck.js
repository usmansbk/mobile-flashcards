import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

export default function NewDeck() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is the title of your new deck?</Text>
      <TextInput placeholder="Deck Title" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
  },
});
