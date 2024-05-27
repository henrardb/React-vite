import "./App.css";
import AddTodo from "./components/AddTodo";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <Provider store={store}>
        <h1>Redux</h1>
        <AddTodo />
        {/* Loop on <Todo /> */}
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
