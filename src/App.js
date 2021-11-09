import React from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configStore';
import Greeting from './components/Gretting';

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
        <Link to="/greeting">Click me</Link>
        <Routes>
          <Route path="/greeting" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  
  );
}

export default App;
