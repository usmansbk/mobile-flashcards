import AsyncStorage from "@react-native-async-storage/async-storage";

const DATA_KEY = "udaci_flashcards_decks";

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
  const data = await AsyncStorage.getItem(DATA_KEY);
  if (data) {
    return JSON.parse(data);
  }
  return {};
}

export async function getDeck(id) {
  const data = await AsyncStorage.getItem(DATA_KEY);
  if (data) {
    const deck = JSON.parse(data)[id];
    return deck;
  }
  return null;
}

export async function saveDeckTitle(title) {
  const data = await AsyncStorage.getItem(DATA_KEY);
  const decks = data ? JSON.parse(data) : {};
  const newDecks = {
    ...decks,
    [title]: {
      title,
      questions: [],
    },
  };
  await AsyncStorage.setItem(DATA_KEY, JSON.stringify(newDecks));
}

export async function addCardToDeck(title, card) {
  const data = await AsyncStorage.getItem(DATA_KEY);
  const decks = data ? JSON.parse(data) : {};
  const newDecks = {
    ...decks,
    [title]: {
      title,
      questions: [...decks[title].questions, card],
    },
  };
  await AsyncStorage.setItem(DATA_KEY, JSON.stringify(newDecks));
}

export async function persistDecks(decks) {
  await AsyncStorage.setItem(DATA_KEY, JSON.stringify(decks));
}
