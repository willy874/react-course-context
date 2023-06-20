import * as React from 'react';
import logo from './logo.svg';
import Card from './Card';
import { CartListCtx, InputCtx } from './contexts';
import './App.css';

const createCard = (title) => {
  return {
    id: Date.now(),
    title,
  };
};

function List({ cards }) {
  return (
    <div>
      {cards.map((card) => <Card id={card.id} title={card.title} key={card.id} />)}
    </div>
  );
}

function App() {
  const [cards, setCards] = React.useState([]);
  const [value, setValue] = React.useState('');

  const onChange = (event) => {
    setValue(event.target.value)
  }
  const addCard = () => {
    setCards([...cards, createCard(value)]);
    setValue('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex' }}>
          <input type="text" value={value} onChange={onChange} />
          <button onClick={addCard}>Add</button>
        </div>
        <InputCtx.Provider value={{ value, setValue }}>
          <CartListCtx.Provider value={{ cards, setCards }}>
            <List cards={cards} />
          </CartListCtx.Provider>
        </InputCtx.Provider>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
