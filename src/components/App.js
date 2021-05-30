import '../styles/App.css';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Education from './Education';

function App() {//<Skills/>
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  return (
    <div className="App">
      <Header/>
      <About />
      <Education />
      <Skills />
    </div>
  );
}

export default App;
