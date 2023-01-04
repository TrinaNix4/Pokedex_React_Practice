import "./App.css";
import Pokecard from "./Pokecard";

function App() {
  return (
    <div className="App">
      <Pokecard
        //pass in props
        id={4}
        name="Charmander"
        type="fire"
        exp={62}
      />
    </div>
  );
}

export default App;
