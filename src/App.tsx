import "./App.css";
import { itemData } from "./data";
import { Gameboard } from "./Gameboard";

function App() {
  return (
    <>
      <Gameboard itemData={itemData} />
    </>
  );
}

export default App;
