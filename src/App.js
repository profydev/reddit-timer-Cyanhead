import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/search" element="" />
        </Route>
        <Route path="*" element="" />
      </Routes>
    </Router>
  );
}

export default App;
