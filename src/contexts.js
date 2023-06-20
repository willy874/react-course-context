import * as React from 'react';

export const CartListCtx = React.createContext({
  cards: [],
  setCards: () => {}
});

export const InputCtx = React.createContext({
  value: '',
  setValue: () => {}
});