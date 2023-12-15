import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import SectionA from './components/SectionA';
import SectionB from './components/SectionB';

function App() {
  return (
    <div>
      <Nav />

      <div>
        <Hero />
      </div>

      <div>
        <SectionA />
      </div>

      <div>
        <SectionB />
      </div>

      <Footer />

    </div>
  );
}

export default App;
