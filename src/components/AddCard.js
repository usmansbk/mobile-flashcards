import React, { useState, useRef } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { addCardToDeck } from "../redux/actions";
import { background, inputBackground } from "../utils/colors";

export default function AddCard({ route, navigation }) {
  const dispatch = useDispatch();
  const title = route.params.title;
  const answerRef = useRef(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const onSubmit = () => {
    dispatch(addCardToDeck(title, { question, answer }));
    navigation.pop();
  };

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
          blurOnSubmit={false}
          returnKeyType="next"
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
      <Button onPress={onSubmit} disabled={!(question && answer)}>
        Add Card
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
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
    backgroundColor: inputBackground,
  },
});
