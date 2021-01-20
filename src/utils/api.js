import AsyncStorage from "@react-native-async-storage/async-storage";

const mock = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces",
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event",
      },
    ],
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
      },
    ],
  },
};

export async function getDecks() {
  return mock;
}

export function getDeck(id) {
  return mock[id];
}

export function saveDeckTitle(title) {
  mock[title] = {
    title,
    questions: [],
  };
}

export function addCardToDeck(title, card) {
  mock[title].questions.push(card);
}
