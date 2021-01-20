import * as API from "../utils/api";

export const RECEIVE_DECKS = "decks/receive";
export const SAVE_DECK_TITLE = "decks/save";
export const ADD_CARD_TO_DECK = "deck/add_card";

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

export function handleInitialData() {
  return async (dispatch) => {
    const decks = await API.getDecks();
    dispatch(receiveDecks(decks));
  };
}

export function saveDeckTitle(title) {
  return {
    type: SAVE_DECK_TITLE,
    title,
  };
}

export function addCardToDeck(title, card) {
  return {
    type: ADD_CARD_TO_DECK,
    title,
    card,
  };
}
