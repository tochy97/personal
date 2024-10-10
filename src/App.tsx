import React from 'react';
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
