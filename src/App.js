import './App.css';
import Greeting from "../src/components/greeting/Greeting";
import RandomText from "./components/randomText/RandomText";
import Name from "./components/name/Name";

function App() {
  return (
    <div className="App">
    <Greeting/>
      <RandomText/>
      <Name firstName="Ana"
            lastName="Miljkovic"/>
    </div>
  );
}

export default App;
