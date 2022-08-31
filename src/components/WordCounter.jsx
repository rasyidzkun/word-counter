import { useState, useEffect } from "react";
import styles from "./WordCounter.module.css";

const WordCounter = () => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const changeHandler = (event) => {
    setText(event.target.value.trimStart());
  };

  useEffect(() => {
    const words = text.split(" ");
    let wordCount = 0;

    words.forEach((word) => {
      if (word.trim() !== "") {
        wordCount++;
      }
    });

    setWordCount(wordCount);
    setCharCount(text.length);
  }, [text]);

  return (
    <div className={styles.container}>
      <h1>
        Word Count : <span className={styles.num}>{wordCount}</span>
      </h1>
      <h2>
        Character Count : <span className={styles.num}>{charCount}</span>
      </h2>

      <textarea
        placeholder="Type Here..."
        value={text}
        onChange={changeHandler}
      ></textarea>
    </div>
  );
};

export default WordCounter;
