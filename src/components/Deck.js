import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "./Button";
import * as API from "../utils/api";

export default function Deck({ route }) {
  const id = route.params.title;

  const { title, questions } = API.getDeck(id);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.count}>
          <MaterialCommunityIcons name="cards" size={24} />
          <Text style={styles.cardCount}>
            {questions.length} card{questions.length > 1 ? "s" : ""}
          </Text>
        </View>
      </View>
      <Button secondary>Add Card</Button>
      <Button>Start Quiz</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    fontSize: 37,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  count: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardCount: {
    fontSize: 24,
  },
});
