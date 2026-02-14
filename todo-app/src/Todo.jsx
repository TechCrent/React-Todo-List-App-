import  { useState } from 'react';

function Todo() {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    const newCard = { id: Date.now(), title: "New Card" };
    setCards(prev => [...prev, newCard]);
  };

  return (
    <>
      <button onClick={addCard}>Add Card</button>
      <div className="cards">
        {cards.map(card => (
          <div key={card.id} className="card">
            {card.title}
          </div>
        ))}
      </div>
    </>
  );
}

export default Todo
