import { useState } from "react";

function Todo() {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState("");

  const addCard = () => {
    if (title.trim() === "") return;

    const newCard = {
      id: Date.now(),
      title: title
    };

    // Clear input after adding
    setCards((prev) => [...prev, newCard]);
    setTitle(""); 
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      
      <h2 className="text-xl font-bold mb-4">Simple Card List</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter card name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={addCard}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      <div className="space-y-2">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-gray-100 p-3 rounded shadow-sm"
          >
            {card.title}
          </div>
        ))}
      </div>

    </div>
  );
}

export default Todo;
