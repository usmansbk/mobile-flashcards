import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Decks from "./Decks";
import NewDeck from "./NewDeck";
import Deck from "./Deck";

const Stack = createStackNavigator();

export default function Screens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Decks"
        component={Decks}
      />
      <Stack.Screen
        options={{ title: "New Deck" }}
        name="NewDeck"
        component={NewDeck}
      />
      <Stack.Screen
        options={({ route }) => ({ title: route.params.title })}
        name="Deck"
        component={Deck}
      />
    </Stack.Navigator>
  );
}
