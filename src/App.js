import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Link to='/greeting'>Click me</Link>
      <Routes>
        <Route path='/greeting' element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
