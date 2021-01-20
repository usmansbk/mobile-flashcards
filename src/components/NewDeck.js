import React from "react";
import { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { saveDeckTitle } from "../redux/actions";

export default function NewDeck({ navigation }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const onSubmit = () => {
    dispatch(saveDeckTitle(title));
    navigation.replace("Deck", { title });
  };

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
