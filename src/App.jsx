import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Payment from './components/Payment';

import item from './components/item';

const App = () => {
  const [items, setItems] = useState(item);
  const [quantity, setQuantity] = useState(items.map(() => 0));
  // value={{ items, setItems, quantity, setQuantity }}

  return (
  
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
 
   
  );
};

export default App;
