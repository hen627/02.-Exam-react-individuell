import './App.css'
import React from 'react'
import CardMenu from './Views/CardMenu.jsx'
import CardForm from './Views/Cardform.jsx'
import CardList from './Views/CardList.jsx'
import { useState,useEffect } from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import defaultCards from './store/DefaultCards'

function App() {
  const [cards, setCards] = useState(defaultCards);
  console.log(cards)
  const [selectedCard, setSelectedCard] = useState(null);


  const handleAddCard = (cardData) => {
    setCards((prevCards) => [...prevCards, ...cardData]);
  }

  const handleCardSelection = (card) => {
    setSelectedCard(card);
    console.log(card);
  }


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<CardMenu cards={cards}
        selectedCard={selectedCard}
        />} />
        <Route path="/NewCard" element={<CardForm 
        onAddCard = {handleAddCard}
        cards={cards}
         />}/>
        <Route path="/Cardlist" element={<CardList 
        cards={cards}
        onCardSelect={handleCardSelection}
        selectedCard={selectedCard}
        />} />
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App