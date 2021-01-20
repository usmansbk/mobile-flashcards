import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";

const middleware = applyMiddleware(thunk);

const store = createStore(reducer, middleware);

export default store;
