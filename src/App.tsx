import { app } from './components/classNames';
import Floaters from './components/Floaters/Floaters';
import About from './pages/About/About'
import History from './pages/History/History'
import Display from "./components/Display/Display";

function App() {

  let list = [
    {
      name: "",
      content: <About />
    },
    {
      name: "NYTimes",
      content: <History />
    }
  ]
  return (
    <div className={app}>
      <Display contentList={list} title={'Home'} />      
      <Floaters />
    </div>
  );
}

export default App;
