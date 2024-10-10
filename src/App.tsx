import React from 'react';
import Nav from "./components/Nav/Nav"
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { container } from './components/classNames';

function App() {
  return (
    <div className="App">
      <Nav />
      <Content display={<About />} />
      <Footer />
    </div>
  );
}

export default App;
