export const allKeys = String.fromCharCode(...Array(123).keys()).slice(97).split('');
export const initialState = allKeys.map((letter) => { return { letter: letter, isClicked: false } });
