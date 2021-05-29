import '../styles/App.css';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';

function App() {//<Skills/>
  //<Contact />
  return (
    <div className="App">
      <Header/>
      <About/>
      <Education />
      
    </div>
  );
}

export default App;
