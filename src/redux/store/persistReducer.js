import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "../reducers";

const persistConfig = {
  key: "todoList",
  storage,
};

const configurePersistReducer = () => {
  const persistedReducer = persistReducer(persistConfig, reducers);
  return persistedReducer;
};

export default configurePersistReducer();
