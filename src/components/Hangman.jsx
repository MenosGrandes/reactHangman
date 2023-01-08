import React from 'react'
import {ReactComponent as HangmanSvg} from './hangman.svg';
import styles from '../css/Hangman.module.css'
export default function Hangman() {
  return (
    <>
    <div>Hangman</div>
    <HangmanSvg className={styles.hangman}/>
    </>
  )
}
