import logo from './logo.svg';
import styles from'./App.css';
import Hero from './pages/Hero';
import { NavBar } from './Components/NavBar';
import Contact from './pages/Contact';



function App() {
  return (
    <div className="App">
    <NavBar/>
    <Hero/>
    <Contact/>
  


    </div>
  );
}

export default App;
