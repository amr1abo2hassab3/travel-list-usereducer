import React from "react";

function Stats({ items }) {
  const lengthOfItems = items.length;
  const packedDone = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedDone / lengthOfItems) * 100);

  if (!lengthOfItems) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list</em>
      </footer>
    );
  }
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You got everything? Ready to go ✈`
          : `  💼 You have ${lengthOfItems} items on your list , and you already packed
       ${packedDone}  (${percentage}%) `}
      </em>
    </footer>
  );
}

export default Stats;
