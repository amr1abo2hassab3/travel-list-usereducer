import React, { useReducer } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
const intialState = {
  items: [],
};
function reducer(state, action) {
  switch (action.type) {
    case "addItem":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "deleteItem":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "donePacked":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, packed: !item.packed } : item
        ),
      };
    case "deleteAll":
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
}

function App() {
  const [{ items }, dispatch] = useReducer(reducer, intialState);

  return (
    <div className="app">
      <Logo />
      <Form dispatch={dispatch} />
      <PackingList items={items} dispatch={dispatch} />
      <Stats items={items} />
    </div>
  );
}

export default App;
