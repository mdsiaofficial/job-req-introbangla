
import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child count={count} increment={() => setCount(count + 1)} />
    </>

  )
};

export default Parent;