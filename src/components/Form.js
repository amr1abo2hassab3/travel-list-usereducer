import React, { useState } from "react";

function Form({ dispatch }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleAddItem(e) {
    e.preventDefault();

    const item = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    if (!description) return;
    dispatch({ type: "addItem", payload: item });
    setQuantity(1);
    setDescription("");
  }
  return (
    <form className="add-form" onSubmit={handleAddItem}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        placeholder="Item..."
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
