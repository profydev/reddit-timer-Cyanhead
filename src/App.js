import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;
