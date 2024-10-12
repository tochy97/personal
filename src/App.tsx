import React, { ReactNode, useEffect } from 'react';
import { useQuery, useReactiveVar } from '@apollo/client';

import Nav from "./components/Nav/Nav"
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import { app } from './components/classNames';
import Floaters from './components/Floaters/Floaters';
import { GET_CONTENT } from './components/apollo/model/queries';
import Loading from './components/Loading/Loading';

import History from "./pages/History/History";
import About from './pages/About/About';

function App() {
  
  const { loading, error, data } = useQuery(GET_CONTENT);
  if (loading) return <Loading/>;
  else if (error) console.log(error.message);
  let contentDisplay: ReactNode = <></>;

  switch (data.content.current) {
    case "Home":
      contentDisplay = <About />
      break;
    case "History":
      contentDisplay = <History />
      break;
    default:
      break;
  }

  return (
    <div className={app}>
      <Nav />
      <Content display={contentDisplay} />
      <Footer />
      <Floaters/>
    </div>
  );
}

export default App;
