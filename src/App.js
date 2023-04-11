import './App.css';
import Nav from './components/Nav';
import Headers from './components/Header';
import Main from './components/Main';
import Trailer from './components/ComponentsMain/Trailer';
import Loading from './components/Loading';

function App() {

  return (
    <div className="App">
      <Loading />
      <Nav />
      <Headers />
      <Main />
      <Trailer />
    </div>
  );
}

export default App;