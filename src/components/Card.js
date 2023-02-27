import React from "react";

export default function Card({ card, onCardClick }) {
  return (
    <li className="elements__card">
      <button
        className="elements__delete"
        type="button"
        aria-label="Удалить"
      ></button>
      <img
        className="elements__foto"
        onClick={() => {
          onCardClick(card);
        }}
        src={card.link}
        alt={card.name}
      />
      <div className="elements__item">
        <h2 className="elements__title">{card.name}</h2>
        <div className="elements__favorite-group">
          <button
            className="elements__favorite"
            type="button"
            aria-label="Нравится"
          ></button>
          <span className="elements__favorite-num">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}
