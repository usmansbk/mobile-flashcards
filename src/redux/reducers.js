import {
  ADD_CARD_TO_DECK,
  DELETE_DECK,
  RECEIVE_DECKS,
  SAVE_DECK_TITLE,
} from "./actions";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case SAVE_DECK_TITLE:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: [],
          timestamp: Date.now(),
        },
      };
    case ADD_CARD_TO_DECK:
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          questions: [...state[action.title].questions, action.card],
        },
      };
    case DELETE_DECK:
      const newState = { ...state };
      delete newState[action.title];
      return newState;
    default:
      return state;
  }
}
