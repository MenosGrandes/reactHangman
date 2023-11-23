import styles from "../css/Hangman.module.css";
import hangmanWhole from "../hangmanSvg/hangman.svg";
import hangman_1 from "../hangmanSvg/hangman1.svg";
import hangman_2 from "../hangmanSvg/hangman2.svg";
import hangman_3 from "../hangmanSvg/hangman3.svg";

export default function Hangman({ hangmanPoints }) {
  function renderSwitch(hangmanPoints) {
    switch (hangmanPoints) {
      case 0:
        return <img src={hangman_1} />;
      case 1:
        return <img src={hangman_2} />;
      case 2:
        return <img src={hangman_3} />;
      default:
        return <img src={hangmanWhole} />;
    }
  }
  return (
    <>
      <div className={styles.hangman}>
        hangman
        {renderSwitch(hangmanPoints)}
      </div>
    </>
  );
}
