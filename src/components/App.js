import '../styles/App.css';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Skills/>
      <Education/>
      <Contact/>
    </div>
  );
}

export default App;
