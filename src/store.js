import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../src/reducers";
// import { persistStore } from "redux-persist";

export const store = createStore(
  reducers,
  {}, //state
  compose(applyMiddleware(thunk))
);
