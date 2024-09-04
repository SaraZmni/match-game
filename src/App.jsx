import "./App.css";
import Game from "./Game";
import { data } from "./Data";

function App() {
  return (
    <main>
      <Game data={data} />
    </main>
  );
}

export default App;
