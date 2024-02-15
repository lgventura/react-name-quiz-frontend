import React from "react";

const InputWord = ({ word, onChange, checkWords, wordsArray }) => {
  const inputChange = (event) => {
    const { value } = event.target;
    onChange(value);

    const findWord = wordsArray.find(
      (word) => word.toLowerCase() === value.toLowerCase()
    );

    if (findWord) {
      checkWords();
    }
  };

  return (
    <input
      type="text"
      value={word}
      onChange={inputChange}
      placeholder="Type a word"
      style={{ margin: 10, width: 350, height: 30 }}
    />
  );
};

export default InputWord;
