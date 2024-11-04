import React, { memo } from 'react';

const Child2 = memo(({ value }) => {
  console.log('Child render');
  return (
    <div>
      <p>Value: {value}</p>
    </div>
  );
});

Child2.displayName = 'Child';

export default Child2; 