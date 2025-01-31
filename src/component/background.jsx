import React, { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); 
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Type something here..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default App;











