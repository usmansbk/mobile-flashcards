import { RECEIVE_DECKS } from "./actions";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    default:
      return state;
  }
}
