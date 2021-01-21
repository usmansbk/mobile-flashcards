import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch } from "react-redux";
import Decks from "./Decks";
import NewDeck from "./NewDeck";
import Deck from "./Deck";
import AddCard from "./AddCard";
import Quiz from "./Quiz";
import { handleInitialData } from "../redux/actions";
import { black, contrastText } from "../utils/colors";

const Stack = createStackNavigator();

const headerStyle = {
  headerStyle: {
    backgroundColor: black,
  },
  headerTintColor: contrastText,
};

export default function Screens() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Decks"
        component={Decks}
      />
      <Stack.Screen
        options={{ title: "New Deck", ...headerStyle }}
        name="NewDeck"
        component={NewDeck}
      />
      <Stack.Screen
        options={({ route }) => ({ title: route.params.title, ...headerStyle })}
        name="Deck"
        component={Deck}
      />
      <Stack.Screen
        options={{ title: "Add Card", ...headerStyle }}
        name="AddCard"
        component={AddCard}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={({ route }) => ({
          title: route.params.title,
          ...headerStyle,
        })}
      />
    </Stack.Navigator>
  );
}
