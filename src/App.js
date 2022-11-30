import React, { useState, useCallback } from 'react';
import './style.css';
import Counter from './Counter';

const App = () => {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  const increaseFirstCounter = useCallback(
    () => setFirstCounter((prevValue) => prevValue + 1),
    []
  );
  const increaseSecondCounter = useCallback(
    () => setSecondCounter((prevValue) => prevValue + 1),
    []
  );

  const firstCounterComponent = (
    <Counter callback={increaseFirstCounter} index={1} />
  );

  const secondCounterComponent = (
    <Counter callback={increaseSecondCounter} index={2} />
  );

  return (
    <div>
      <p>Licznik nr 1,wynosi: {firstCounter}</p>
      <p>Licznik nr 2,wynosi: {secondCounter}</p>
      {/* {firstCounterComponent} */}
      {/* <Counter counter={firstCounter} index={1} />
      <Counter counter={secondCounter} index={2} /> */}

      {firstCounterComponent}
      {secondCounterComponent}

      {/* <button onClick={increaseFirstCounter}>Zwiększ licznik nr.1</button>
      <button onClick={increaseSecondCounter}>Zwiększ licznik nr.2</button> */}
    </div>
  );
};

export default App;
