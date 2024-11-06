

import React, { useState } from 'react'
import Count from './Count'
import CustomButton from './CustomButton'

const Counter = ({count, onPlus, onMinus}) => {
  
  // const [count, setCount] = useState(0)
  // const handlePlus = () => {
  //   setCount(count + 1)
  // }
  // const handleMinus = () => {
  //   setCount(count - 1)
  // }

  return (
    <div>
      <div className="p-5 h-auto bg-indigo-500 flex flex-col items-center justify-center my-5 bg-wheat rounded shadow">
        <Count count={count}/>
        <div className="flex mx-3">
          <CustomButton bg='green' handler={onPlus}>Plus</CustomButton>
          <CustomButton bg='red' handler={onMinus}>Minus</CustomButton>
          {/* <button onClick={handlePlus} className='m-2 bg-green-300'>Plus</button> */}
          {/* <button onClick={handleMinus} className='m-2 bg-red-300'>Minus</button> */}
        </div>
      </div>
    </div>
  )
}

export default Counter