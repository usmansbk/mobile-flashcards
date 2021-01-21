import React, { useRef, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { useSelector } from "react-redux";
import Empty from "./Empty";
import Button, { IconButton } from "./Button";
import { wrong, right, getColor, contrastText } from "../utils/colors";

const { height } = Dimensions.get("window");
const CARD_HEIGHT = height * 0.65;
const PAGINATION = 3;

export default function Quiz({ route, navigation }) {
  const title = route.params.title;
  const { questions } = useSelector((state) => state[title]);

  return <QuizContainer questions={questions} navigation={navigation} />;
}

class QuizContainer extends React.Component {
  state = {
    currentIndex: 0,
    correct: 0,
  };

  _wrong = () => {
    if (this.state.currentIndex < this.props.questions.length) {
      this.setState((prev) => ({
        currentIndex: prev.currentIndex + 1,
      }));
    }
  };

  _correct = () => {
    if (this.state.currentIndex < this.props.questions.length) {
      this.setState((prev) => ({
        currentIndex: prev.currentIndex + 1,
        correct: prev.correct + 1,
      }));
    }
  };

  _backToDeck = () => this.props.navigation.goBack();
  _restart = () =>
    this.setState({
      currentIndex: 0,
      correct: 0,
    });

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
          {currentIndex === questions.length ? (
            <>
              <Button onPress={this._restart}>Restart Quiz</Button>
              <Button onPress={this._backToDeck}>Back to Deck</Button>
            </>
          ) : (
            <>
              <IconButton
                name="close-thick"
                color={wrong}
                onPress={this._wrong}
              />
              <IconButton
                name="check-bold"
                color={right}
                onPress={this._correct}
              />
            </>
          )}
        </View>
      </View>
    );
  }
}

function Card({ total, card, index, currentIndex }) {
  const [flipped, setFlip] = useState(false);
  const flipAnim = useRef(new Animated.Value(0)).current;
  const onPress = () => {
    if (currentIndex === index) {
      Animated.timing(flipAnim, {
        toValue: flipped ? 0 : 1,
        useNativeDriver: false,
      }).start(() => setFlip((val) => !val));
    }
  };

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
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.cardContainer}>
        <Animated.View
          style={[
            styles.card,
            {
              backgroundColor: color,
              zIndex: flipAnim,
              transform: [
                {
                  rotateY: flipAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "180deg"],
                    extrapolate: "clamp",
                  }),
                },
                {
                  scaleX: -1,
                },
              ],
              ...tailStyle,
            },
          ]}
        >
          <View style={styles.header}>
            <Text style={styles.text}>Answer</Text>
            <Text style={styles.caption}>
              {index + 1}/{total}
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={[styles.text, styles.mainText]}>{card.answer}</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.caption}>Tap to flip</Text>
          </View>
        </Animated.View>
        <Animated.View
          style={[
            styles.card,
            {
              backgroundColor: color,
              zIndex: flipAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
                extrapolate: "clamp",
              }),
              transform: [
                {
                  rotateY: flipAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "180deg"],
                    extrapolate: "clamp",
                  }),
                },
              ],
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
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
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
  cardContainer: {
    position: "absolute",
    width: "85%",
    height: CARD_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    position: "absolute",
    width: "100%",
    height: "100%",
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
