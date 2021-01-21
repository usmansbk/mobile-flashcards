import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/components";
import { Provider } from "react-redux";
import store from "./src/redux";
import { black } from "./src/utils/colors";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={black} barStyle="light-content" />
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}
