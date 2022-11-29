import React from 'react';

const Counter = ({ counter, index }) => {
  console.log(`render licznika nr: ${index}`);

  return (
    <div>
      <p>
        Licznik nr {index}, wynosi: {counter}
      </p>
    </div>
  );
};

export default Counter;
