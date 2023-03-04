import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import persistStore from "./redux/store";
import TodoList from "./TodoList";
import "./App.css";

const { store, persistor } = persistStore;

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TodoList />
      </PersistGate>
    </Provider>
  );
}

export default App;
