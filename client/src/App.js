import './App.css';
import Landing from './scenes/Landing';
import Footer from './components/Footer';
import Navbar from './components/Nav';

function App() {
  return (
    <div className="App">
      <Landing />
      <Footer/>
      <Navbar/>
    </div>
  );
}

export default App;
