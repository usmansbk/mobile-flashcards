import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Empty from "./Empty";

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
      <Text>Quiz</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
});
