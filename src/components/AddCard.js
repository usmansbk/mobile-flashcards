import React, { useState, useRef } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import Button from "./Button";
import * as API from "../utils/api";

export default function AddCard({ route }) {
  const title = route.params.title;
  const answerRef = useRef(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const onSubmit = () => API.addCardToDeck(title, { question, answer });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Question</Text>
        <TextInput
          autoFocus
          style={styles.input}
          placeholder="Type your question"
          value={question}
          onChangeText={(text) => setQuestion(text)}
          onSubmitEditing={() => answerRef.current.focus()}
        />

        <Text style={styles.label}>Answer</Text>
        <TextInput
          ref={answerRef}
          style={styles.input}
          placeholder="Type your answer"
          value={answer}
          onChangeText={(text) => setAnswer(text)}
        />
      </View>
      <Button onPress={onSubmit}>Add Card</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  label: {
    fontWeight: "bold",
    fontSize: 24,
  },
  input: {
    fontSize: 20,
    marginTop: 4,
    marginBottom: 24,
    backgroundColor: "#f9f9f9",
  },
});
