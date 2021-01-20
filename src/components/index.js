import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Decks from "./Decks";
import NewDeck from "./NewDeck";

const Stack = createStackNavigator();

export default function Screens() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Decks" component={Decks} />
      <Stack.Screen name="NewDeck" component={NewDeck} />
    </Stack.Navigator>
  );
}
