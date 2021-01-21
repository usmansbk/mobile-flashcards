import React, { useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import Empty from "./Empty";
import { background, primary, black } from "../utils/colors";

export default function Decks({ navigation }) {
  const decks = useSelector((state) => state);
  const data = Object.values(decks);

  const onPressItem = useCallback(
    (title) => navigation.navigate("Deck", { title }),
    []
  );
  const onPressFAB = useCallback(() => navigation.navigate("NewDeck"), []);
  const renderItem = ({ item }) => {
    const { title, questions } = item;
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => onPressItem(title)}
      >
        <Text style={styles.itemTitle}>{title}</Text>
        <View style={styles.cardCount}>
          <MaterialCommunityIcons name="cards-outline" size={24} />
          <Text style={styles.count}>{questions.length}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Decks</Text>
      <FlatList
        data={data}
        contentContainerStyle={styles.list}
        keyExtractor={({ title }) => title}
        renderItem={renderItem}
        ListEmptyComponent={EmptyList}
      />
      <FAB onPress={onPressFAB} />
    </View>
  );
}

const FAB_SIZE = 60;
function FAB({ onPress }) {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <MaterialCommunityIcons name="plus" size={FAB_SIZE / 2} color="white" />
    </TouchableOpacity>
  );
}

function EmptyList() {
  return (
    <Empty
      title="You haven't created any decks yet"
      subtitle="Press the '+' button to create a new deck"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
  },
  list: {
    flexGrow: 1,
    padding: 16,
    paddingTop: 0,
    paddingBottom: 100,
  },
  title: {
    padding: 16,
    fontWeight: "bold",
    fontSize: 27,
    color: black,
  },
  itemContainer: {
    padding: 10,
    elevation: 4,
    backgroundColor: background,
    margin: 4,
    borderRadius: 4,
  },
  itemTitle: {
    fontSize: 18,
    marginVertical: 4,
  },
  cardCount: {
    alignSelf: "flex-end",
    flexDirection: "row",
  },
  count: {
    fontSize: 20,
    paddingHorizontal: 4,
  },
  fab: {
    position: "absolute",
    right: 0,
    bottom: 24,
    margin: 16,
    width: FAB_SIZE,
    height: FAB_SIZE,
    borderRadius: FAB_SIZE / 2,
    backgroundColor: primary,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },
});
