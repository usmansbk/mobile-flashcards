import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "./Button";
import { useSelector } from "react-redux";

export default function Deck({ route, navigation }) {
  const id = route.params.title;
  const { title, questions } = useSelector((state) => state[id]);

  const toAddCard = () => navigation.navigate("AddCard", { title });
  const toStartQuiz = () => null;

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
      <Button secondary onPress={toAddCard}>
        Add Card
      </Button>
      <Button onPress={toStartQuiz}>Start Quiz</Button>
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
