import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";

const whitelist = ["todoReducer"];

const rootReducerConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: whitelist,
};

const rootReducer = combineReducers({
  todoReducer,
});

export default persistedReducers = persistReducer(
  rootReducerConfig,
  rootReducer
);
