import React, { useState } from "react";
import "./App.css";

function App() {
  const [shapes, setShapes] = useState([]);
  const [color, setColor] = useState("#000000");

  const addCircle = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setShapes([
      ...shapes,
      { cx: x, cy: y, r: 20, fill: color }
    ]);
  };

  const undoLast = () => {
    setShapes(shapes.slice(0, -1));
  };

  return (
    <div className="container">
      <h2>SVG Drawing Tool</h2>

      <div className="controls">
        <label>
          Select Color:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <button onClick={undoLast}>Undo</button>
      </div>

      <svg className="canvas" onClick={addCircle}>
        {shapes.map((shape, index) => (
          <circle
            key={index}
            cx={shape.cx}
            cy={shape.cy}
            r={shape.r}
            fill={shape.fill}
          />
        ))}
      </svg>
    </div>
  );
}

export default App;
