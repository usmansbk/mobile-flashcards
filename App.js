import React from "react";
import { StatusBar } from "react-native";
import Screens from "./src/components";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Screens />
    </>
  );
}
