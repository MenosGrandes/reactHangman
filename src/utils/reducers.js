export const initialReducerState = (word) => {
  const word_ = word.split("");
  const size = word_.length;
  let wordChars = [];

  for (let i = 0; i < size; i++) {
    wordChars.push({ letter: word.charAt(i), isVisible: false });
  }
  return {
    letters: wordChars,
    points: 0,
    hangmanPoints: 3,
  };
};
export function keyboardClickReducer(state, payload) {
  let found = false;
  let _points = state.points;
  let _letters = state.letters.map((elem) => {
    if (elem.letter === payload.payload) {
      found = true;
      if (!elem.isVisible) {
        elem.isVisible = true;
        _points = _points + 1;
      }
    }
    return elem;
  });
  let _hangmanPoints = state.hangmanPoints;
  if (!found) {
    _hangmanPoints = _hangmanPoints - 1;
    _points = _points - 1;
  }
  return {
    letters: _letters,
    points: _points,
    hangmanPoints: _hangmanPoints,
  };
}
