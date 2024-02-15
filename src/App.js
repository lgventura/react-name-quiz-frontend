import { useEffect, useState } from "react";
import HeaderInfos from "./components/HeaderInfos";
import InputWord from "./components/InputWord";
import TableWords from "./components/TableWords";

// Implement to get Words from BE
const wordsArray = [
  "break",
  "do",
  "instanceof",
  "typeof",
  "case",
  "else",
  "new",
  "var",
  "catch",
  "finally",
  "return",
  "void",
  "continue",
  "for",
  "switch",
  "while",
  "debugger",
  "function",
  "this",
  "with",
  "default",
  "if",
  "throw",
  "delete",
  "in",
  "try",
  "abstract",
  "export",
  "interface",
  "static",
  "boolean",
  "extends",
  "long",
  "final",
  "char",
  "float",
  "package",
  "throws",
  "class",
  "private",
  "transient",
  "const",
  "implements",
  "protected",
  "double",
  "import",
  "public",
  "enum",
  "int",
  "short",
];

const App = () => {
  const [inputWord, setInputWord] = useState("");
  const [wordsFound, setWordsFound] = useState(Array(50).fill(""));
  const [points, setPoints] = useState(0);

  useEffect(() => {
    checkWords();
  }, [inputWord]);

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
