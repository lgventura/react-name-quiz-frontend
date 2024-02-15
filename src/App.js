import { useEffect, useState } from "react";
import HeaderInfos from "./components/HeaderInfos";
import InputWord from "./components/InputWord";
import TableWords from "./components/TableWords";
import axios from "axios";

const App = () => {
  const [inputWord, setInputWord] = useState("");
  const [wordsFound, setWordsFound] = useState(Array(50).fill(""));
  const [points, setPoints] = useState(0);
  const [wordsArray, setWordsArray] = useState([]);

  useEffect(() => {
    const fetchWordsFromAPI = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/names");
        console.log("response", response);
        setWordsArray(response.data);
      } catch (error) {
        console.error("Error to get words from API:", error);
      }
    };

    fetchWordsFromAPI();
  }, []);

  useEffect(() => {
    checkWords();
  }, [inputWord, wordsArray]);

  const checkWords = () => {
    const wordFoundIndex = wordsArray.findIndex(
      (word) => word?.toLocaleLowerCase() === inputWord?.toLocaleLowerCase()
    );

    if (wordFoundIndex !== -1 && !wordsFound[wordFoundIndex]) {
      const newFoundWord = [...wordsFound];
      newFoundWord[wordFoundIndex] = inputWord;
      setWordsFound(newFoundWord);
      setPoints(points + 1);

      setInputWord("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <HeaderInfos points={points} />
      <InputWord
        word={inputWord}
        onChange={(word) => setInputWord(word)}
        checkWords={checkWords}
        wordsArray={wordsArray}
      />
      <TableWords wordsFound={wordsFound} />
    </div>
  );
};

export default App;
