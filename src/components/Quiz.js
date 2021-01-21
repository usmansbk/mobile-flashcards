import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Empty from "./Empty";
import { IconButton } from "./Button";
import { wrong, right } from "../utils/colors";

export default function Quiz({ route }) {
  const title = route.params.title;
  const { questions } = useSelector((state) => state[title]);

  if (!questions.length) {
    return (
      <Empty title="Sorry you cannot take a quiz because there are no cards in the deck." />
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        <Text>Quiz</Text>
      </View>
      <View style={styles.buttons}>
        <IconButton name="close-thick" color={wrong} />
        <IconButton name="check-bold" color={right} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  cards: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
