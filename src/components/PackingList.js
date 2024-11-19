import React, { useState } from "react";
import Item from "./Item";
function PackingList({ items, dispatch }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  } else if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
  }
  function handleDeleteAll() {
    const alertCheck = window.confirm(
      "are you sure you want to delete all items ?"
    );
    if (alertCheck) {
      dispatch({ type: "deleteAll" });
    }
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            description={item.description}
            quantity={item.quantity}
            dispatch={dispatch}
            id={item.id}
            packed={item.packed}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleDeleteAll}>Clear list</button>
      </div>
    </div>
  );
}

export default PackingList;
