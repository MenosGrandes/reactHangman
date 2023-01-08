import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import styles_word from '../css/Word.module.css'
import styles_letter from '../css/Letter.module.css'

const allKeys = String.fromCharCode(...Array(123).keys()).slice(97).split('');
export default function Keyboard({ dispatch }) {
  return (
    <div className={styles_word.word}>
      {allKeys.map((letter, i) => <button key={uuidv4()} className={styles_letter.letter} onClick={() => dispatch({payload : letter})}> {letter} </button>)}
    </div>
  )
}
