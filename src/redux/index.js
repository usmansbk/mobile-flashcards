import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";
import { persistDecks } from "../utils/api";

const middleware = applyMiddleware(thunk);

const store = createStore(reducer, middleware);

store.subscribe(() => {
  const state = store.getState();
  persistDecks(state);
});

export default store;
