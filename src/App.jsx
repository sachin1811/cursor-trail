import { useState } from "react";
import "./styles.css";

export default function App() {
  const [cursorPointer, setCursorPointer] = useState({
    x: 0,
    y: 0,
  });
  return (
    <main
      className="App"
      onPointerMove={(e) => {
        setCursorPointer({ x: e.clientX, y: e.clientY });
      }}
    >
      <div
        className="Cursor"
        style={{
          transform: `translate(${cursorPointer.x}px, ${cursorPointer.y}px)`,
        }}
      ></div>
    </main>
  );
}
