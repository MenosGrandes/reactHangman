import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles_word from "../css/Word.module.css";
import { allKeys, initialState } from "../utils/keyboard";
import Key from "./Key";

export default function Keyboard({ dispatch }) {
  const [clickedLetter, setClickedLetter] = useState(initialState);

  function isDisabled(letter) {
    return clickedLetter.find((e) => e.letter === letter).isClicked;
  }

  return (
    <div>
      {allKeys.map((letter) => (
        <Key
          key={uuidv4()}
          isDisabled={isDisabled}
          letter={letter}
          dispatchFunction={dispatch}
          setClickedLetter={setClickedLetter}
          clickedLetter={clickedLetter}
        />
      ))}
    </div>
  );
}
