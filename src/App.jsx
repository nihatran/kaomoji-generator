import { useState } from "react";
import { happyKaomojis } from "./happy";
import { sadKaomojis } from "./sad";
import { angryKaomojis } from "./angry";

export default function App() {
  const [kaomoji, setKaomoji] = useState("٩(◕‿◕｡)۶");

  function handleGenerate(emotion) {
    switch (emotion) {
      case "happy":
        setKaomoji(
          happyKaomojis[Math.floor(Math.random() * happyKaomojis.length)]
        );
        break;
      case "sad":
        setKaomoji(sadKaomojis[Math.floor(Math.random() * sadKaomojis.length)]);
        break;
      case "angry":
        setKaomoji(
          angryKaomojis[Math.floor(Math.random() * angryKaomojis.length)]
        );
        break;
    }
  }

  return (
    <>
      <div className="header">
        <h1>Kaomoji Generator</h1>
      </div>
      <div className="content">
        <div className="kaomoji-container">
          <p>{kaomoji}</p>
        </div>
        <div className="button-container">
          <button onClick={() => handleGenerate("happy")}>
            Generate Happy Kaomoji
          </button>
          <button onClick={() => handleGenerate("sad")}>
            Generate Sad Kaomoji
          </button>
          <button onClick={() => handleGenerate("angry")}>
            Generate Angry Kaomoji
          </button>
        </div>
      </div>
    </>
  );
}
