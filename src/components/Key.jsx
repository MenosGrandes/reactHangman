import styles from "../css/Key.module.css";
export default function Key({
  isDisabled,
  letter,
  dispatchFunction,
  setClickedLetter,
  clickedLetter,
}) {
  const onClickHandler = () => {
    let clone = clickedLetter.map((elem) => {
      if (elem.letter === letter) {
        if (!elem.isClicked) {
          elem.isClicked = true;
        }
      }
      return elem;
    });

    setClickedLetter(clone);
    dispatchFunction({ payload: letter });
  };

  return (
    <>
      <button
        className={styles.key}
        disabled={isDisabled(letter)}
        onClick={() => onClickHandler()}
      >
        {letter}
      </button>
    </>
  );
}
