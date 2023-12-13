import logo from './logo.svg';
import './App.css';
import CountriesGame from './CountriesGame';
import CardFlipGame from './CardFlipGame';


const data = [
  { "Afghanistan": "Kabul" },
  { "Costarica": "SanJose" },
  { "Germany": "Berlin" },
  { "India": "delhi" },
  { "Ireland": "Dublin" },
];
function App() {
  return (
    <div className="App">
      
    {/* <CountriesGame data={data}/> */}
    {/* <TicTacToe data={data}/> */}
    <CardFlipGame/>
    </div>
  );
}

export default App;
