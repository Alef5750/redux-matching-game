import "./App.css";
import { itemData } from "./data";
import { Gameboard } from "./Gameboard";
import { IImageItem } from "./types";

function App() {
  const shuffle = (array: IImageItem[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  const shuffledData = shuffle(itemData);

  return (
    <>
      <Gameboard itemData={shuffledData} />
    </>
  );
}

export default App;
