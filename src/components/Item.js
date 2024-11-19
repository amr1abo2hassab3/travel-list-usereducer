import React from "react";

function Item({ description, quantity, dispatch, id, packed }) {
  // this function delete one item form state
  function handleDeleteItem() {
    dispatch({ type: "deleteItem", payload: id });
  }
  function handleTogglePacked() {
    dispatch({ type: "donePacked", payload: id });
  }
  return (
    <li>
      <input type="checkbox" checked={packed} onChange={handleTogglePacked} />
      <span>{quantity}</span>
      <span
        onClick={handleTogglePacked}
        style={
          packed
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {description}
      </span>
      <button onClick={handleDeleteItem}>❌</button>
    </li>
  );
}

export default Item;
