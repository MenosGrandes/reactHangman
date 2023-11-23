import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Hangman from "./components/Hangman";
import Keyboard from "./components/Keyboard";
import Word from "./components/Word";
import { initialReducerState, keyboardClickReducer } from "./utils/reducers";
import randomWord from "random-word-by-length";

function App() {
  const [word, _] = useState(randomWord(10));

  const [hangmanState, dispatch] = useReducer(
    keyboardClickReducer,
    initialReducerState(word)
  );

  const [gameState, setGameState] = useState(true);
  useEffect(() => {
    if (hangmanState.hangmanPoints == 0) {
      setGameState(false);
    }
  }, [hangmanState]);

  return gameState ? (
    <>
      <h3> {hangmanState.points} </h3>

      <Hangman hangmanPoints={hangmanState.hangmanPoints} />
      <Word
        word={word.split("")}
        visibleState={hangmanState}
        dispatch={dispatch}
      />
      <Keyboard dispatch={dispatch} />
    </>
  ) : (
    <h4>GAME OVER</h4>
  );
}

export default App;
