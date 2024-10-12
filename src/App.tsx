import React, { useEffect } from 'react';
import Nav from "./components/Nav/Nav"
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import History from "./pages/History/History";
import About from './pages/About/About';
import { app } from './components/classNames';
import Floaters from './components/Floaters/Floaters';

function App() {
  useEffect(() => {
    localStorage.setItem("page", "About");
  }, [])
  return (
    <div className={app}>
      <Nav />
      <Content display={<History />} />
      <Footer />
      <Floaters/>
    </div>
  );
}

export default App;
