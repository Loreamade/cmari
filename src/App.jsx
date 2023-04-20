import './App.css';
import ItemListContainer from './container/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <body>
        <ItemListContainer basic="Proximamente los mejores productos para ti" />
      </body>
    </div>
  );
}

export default App;
