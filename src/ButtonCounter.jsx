import React, { useState } from 'react';

const ButtonCounter = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={handleButtonClick}>Incrementar</button>
    </div>
  );
};

export default ButtonCounter;
