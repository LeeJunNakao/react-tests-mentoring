import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import ToDoPage from './pages/todo-list';
import CryptoPage from './pages/crypto';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='/todo' element={<ToDoPage />} />
        <Route path='crypto' element={<CryptoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
