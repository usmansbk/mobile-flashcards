import React from "react";
import { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import Button from "./Button";
import * as API from "../utils/api";

export default function NewDeck() {
  const [title, setTitle] = useState("");
  const onSubmit = () => API.saveDeckTitle(value);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          value={title}
          onChangeText={(text) => setTitle(text)}
          autoFocus
          multiline
          style={styles.input}
          placeholder="Deck Title"
        />
      </View>
      <Button disabled={!title} onPress={onSubmit}>
        Create Deck
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    fontSize: 24,
    marginVertical: 10,
  },
});
