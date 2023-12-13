import logo from './logo.svg';
import './App.css';
import CardFlipGame from './CardFlipGame';

const data = {
  "Germany": "Berlin",
  "Azerbaijan": "Baku",
  "Poland": "Warszawa",
  "Papua New Guinea": "Port Moresby",
};


function App() {
  return (
    <div className="App">
    <CardFlipGame/>
    </div>
  );
}

export default App;
