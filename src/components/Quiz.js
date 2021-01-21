import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Empty from "./Empty";
import { IconButton } from "./Button";
import { wrong, right, getColor, contrastText } from "../utils/colors";

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
        {questions.map((card, index) => (
          <Card
            number={index + 1}
            total={questions.length}
            card={card}
            key={index}
            color={getColor(index)}
            offset={index}
          />
        ))}
      </View>
      <View style={styles.buttons}>
        <IconButton name="close-thick" color={wrong} />
        <IconButton name="check-bold" color={right} />
      </View>
    </View>
  );
}

function Card({ number, total, color, card, offset }) {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: color,
          transform: [
            {
              translateX: offset * -8,
            },
          ],
        },
      ]}
    >
      <View style={styles.header}>
        <Text style={styles.text}>Question</Text>
        <Text style={styles.caption}>
          {number}/{total}
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={[styles.text, styles.mainText]}>{card.question}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.caption}>Tap to flip</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 16,
  },
  cards: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  card: {
    position: "absolute",
    flex: 1,
    width: "75%",
    height: "80%",
    borderRadius: 20,
    padding: 16,
  },
  text: {
    color: contrastText,
    fontWeight: "bold",
  },
  mainText: {
    fontSize: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    alignItems: "center",
  },
});
