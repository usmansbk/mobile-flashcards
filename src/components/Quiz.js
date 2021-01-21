import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import Empty from "./Empty";
import { IconButton } from "./Button";
import { wrong, right, getColor, contrastText } from "../utils/colors";

const { height } = Dimensions.get("window");
const CARD_HEIGHT = height * 0.65;
const PAGINATION = 3;

export default function Quiz({ route }) {
  const title = route.params.title;
  const { questions } = useSelector((state) => state[title]);

  return <QuizContainer questions={questions} />;
}

class QuizContainer extends React.Component {
  state = {
    currentIndex: 0,
  };

  render() {
    const { questions } = this.props;
    const { currentIndex } = this.state;

    if (!questions.length) {
      return (
        <Empty title="Sorry, you cannot take a quiz because there are no cards in the deck." />
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.cards}>
          {questions
            .map((card, index) => (
              <Card
                key={index}
                card={card}
                index={index}
                currentIndex={currentIndex}
                total={questions.length}
              />
            ))
            .slice(currentIndex, currentIndex + PAGINATION)
            .reverse()}
        </View>
        <View style={styles.buttons}>
          <IconButton name="close-thick" color={wrong} />
          <IconButton name="check-bold" color={right} />
        </View>
      </View>
    );
  }
}

function Card({ total, card, index, currentIndex }) {
  const color = getColor(index);
  const cardIndex = index % PAGINATION;
  const tailStyle =
    index === currentIndex
      ? {}
      : {
          height: CARD_HEIGHT - cardIndex * 12,
          transform: [
            {
              translateX: cardIndex * 4,
            },
          ],
        };
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: color,
          ...tailStyle,
        },
      ]}
    >
      <View style={styles.header}>
        <Text style={styles.text}>Question</Text>
        <Text style={styles.caption}>
          {index + 1}/{total}
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
    width: "85%",
    height: CARD_HEIGHT,
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
  caption: {
    color: contrastText,
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
