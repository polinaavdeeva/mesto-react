import React from "react";

function Card({ card, onCardClick }) {
    
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="elements__item">
      <button className="elements__reset-button"></button>
      <img
        className="elements__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="elements__title-container">
        <p className="elements__title">{card.name}</p>
        <div className="elements__like-info">
          <button className="elements__like"></button>
          <p className="elements__like-nums">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
