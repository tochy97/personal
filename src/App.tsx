import { app } from './components/classNames';
import Floaters from './components/Floaters/Floaters';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className={app}>
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_60%)]" />
      <Floaters />
      <a href="#top" className="fixed left-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900 text-lg font-bold text-sky-400 sm:left-6 sm:top-6">
        T
      </a>
      <div id="top" />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
