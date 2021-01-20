import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";
import { deleteDeck } from "../redux/actions";

export default function Deck({ route, navigation }) {
  const dispatch = useDispatch();
  const title = route.params.title;
  const { questions } = useSelector((state) => state[title]) || {};

  if (!questions) return null;

  const toAddCard = () => navigation.navigate("AddCard", { title });
  const toStartQuiz = () => null;
  const onDelete = () => {
    dispatch(deleteDeck(title));
    navigation.popToTop();
  };

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
      <Button danger onPress={onDelete}>
        Delete Deck
      </Button>
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
