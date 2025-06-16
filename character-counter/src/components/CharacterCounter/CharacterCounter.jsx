import { useState } from "react";
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import TextInput from "../TextInput/TextInput";


// Function to calculate stats from text


function CharacterCounter({ minWords = 5, maxWords = 100, targetReadingSpeed = 200 }) {
  const [text, setText] = useState("");

  const [stats, setStats] = useState({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
  });

  // Handle text updates
  const handleTextChange = (newText) => {
    const wordsArray = newText.trim().split(/\s+/);
    const wordCount = newText.trim() ? wordsArray.length : 0;
    const readingTime = Math.ceil((wordCount / targetReadingSpeed) * 60); // Approximate seconds

    setText(newText);
    setStats({
      characterCount: newText.length,
      wordCount,
      readingTime,
    });
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <TextInput value= {text} onTextChange={handleTextChange} />
      <StatsDisplay stats={stats} minWords={minWords} maxWords={maxWords} />
    </div>
  );
}

export default CharacterCounter;