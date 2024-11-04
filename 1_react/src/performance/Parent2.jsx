import React, { useState } from 'react';
import Child from './Child2';

const Parent2 = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  console.log('Parent render');

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setValue(value + 1)}>Increment Value</button>
      <Child value={value} />
    </div>
  );
};

export default Parent2;
