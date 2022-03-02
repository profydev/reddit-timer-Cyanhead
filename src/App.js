import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyle from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/javascript" element="" />
            <Route path="/how-it-works" element="" />
            <Route path="/about" element="" />
          </Route>
          <Route path="*" element="" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
