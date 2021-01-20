import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/components";
import { Provider } from "react-redux";
import store from "./src/redux";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}
