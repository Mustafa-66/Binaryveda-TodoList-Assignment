import { createStore } from "redux";
import { persistStore } from "redux-persist";
import reducers from "./persistReducer";

const configureStore = () => {
  const store = createStore(reducers);
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore();
