import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import HomePage from './pages/home';
import ToDoPage from './pages/todo-list';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='/todo' element={<ToDoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
