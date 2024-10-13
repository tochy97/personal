import Nav from "./components/Display/Nav/Nav"
import Footer from './components/Display/Footer/Footer';
import Content from './components/Display/Content/Content';
import { app } from './components/classNames';
import Floaters from './components/Floaters/Floaters';

function App() {

  return (
    <div className={app}>
      <Nav />
      <Content />
      <Footer />
      <Floaters/>
    </div>
  );
}

export default App;
