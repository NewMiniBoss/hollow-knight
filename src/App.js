import './App.css';
import Nav from './components/Nav';
import Headers from './components/Header';
import Main from './components/Main';
import Loading from './components/Loading';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Loading />
      <Nav />
      <Headers />
      <Main />
      <Footer />
    </div>
  );
}

export default App;