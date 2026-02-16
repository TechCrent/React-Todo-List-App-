import { useState } from "react";

function Todo() {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState("");

  const addCard = () => {
    if (title.trim() === "") return;

    const newCard = {
      id: Date.now(),
      title: title,
      completed: false
    };

    setCards((prev) => [...prev, newCard]);
    setTitle("");
  };

  const removeCard = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  const toggleComplete = (id) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id
          ? { ...card, completed: !card.completed }
          : card
      )
    );
  };

  const activeTasks = cards.filter((card) => !card.completed);
  const completedTasks = cards.filter((card) => card.completed);

  return (
    <div className="p-6 max-w-md mx-auto">

      <h2 className="text-xl font-bold mb-4">To-Do List</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addCard();
          }}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={addCard}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      {/* Active Tasks */}
      <div className="space-y-2">
        {activeTasks.map((card) => (
          <div
            key={card.id}
            className="bg-gray-100 p-3 rounded shadow-sm flex justify-between items-center"
          >
            <span>{card.title}</span>

            <div className="flex gap-3">
              <button
                onClick={() => toggleComplete(card.id)}
                className="text-green-500 font-bold hover:text-green-700"
              >
                ✓
              </button>

              <button
                onClick={() => removeCard(card.id)}
                className="text-red-500 font-bold hover:text-red-700"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Completed Section */}
      {completedTasks.length > 0 && (
        <>
          <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-600">
            Completed Tasks
          </h3>

          <div className="space-y-2">
            {completedTasks.map((card) => (
              <div
                key={card.id}
                className="bg-gray-200 p-3 rounded flex justify-between items-center"
              >
                <span className="line-through text-gray-500">
                  {card.title}
                </span>

                <button
                  onClick={() => removeCard(card.id)}
                  className="text-red-500 font-bold hover:text-red-700"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  );
}

export default Todo;
