import * as React from 'react';
import { CartListCtx, InputCtx } from './contexts';

export default function Card({ id, title }) {
  const { cards, setCards } = React.useContext(CartListCtx);
  const { value, setValue } = React.useContext(InputCtx);
  const onDelete = () => {
    setCards(cards.filter((card) => card.id !== id))
  }
  const onEdit = () => {
    const newCards = cards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          title: value,
        }
      }
      return card;
    });
    setCards(newCards);
    setValue('')
  }
  return (
    <div style={{ display: 'flex' }}>
      <div>{title}</div>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}