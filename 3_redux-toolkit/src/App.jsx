
import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import TotalCount from './components/TotalCount'
import { useDispatch, useSelector } from 'react-redux'
import { minus, plus } from './features/counters/countersSlice'

// const allCounters = [
//   { id: 1, value: 0 },
//   { id: 2, value: 0 },
//   { id: 3, value: 0 },
//   { id: 4, value: 0 },
//   { id: 5, value: 0 },
//   { id: 6, value: 0 },
//   { id: 7, value: 0 },
//   { id: 8, value: 0 },
// ]


function App() {
  const counters = useSelector( (state)=> state.counters )
  const dispatch = useDispatch()

  // const [counters, setCounters] = useState(allCounters)
  const total = counters.reduce((accu, curr) => accu + curr.value, 0)

  const handlePlus = (counterId) => {
    dispatch(plus(counterId))
  }
  const handleMinus = (counterId) => {
    dispatch(minus(counterId))
  }

  return (
    <>
        
      <div className="bg-indigo-400 text-black">

        <h1 className="max-w-md mx-auto text-center text-4xl font-bold">
          Counter
          <TotalCount total={total}/>
        </h1>

        <div className="mx-auto flex flex-wrap my-5 gap-3 justify-center">

          {
            counters.map((counter)=>(
              <Counter
              count={counter.value} 
              key={counter.id} 
              onPlus={()=> handlePlus(counter.id)} 
              onMinus={()=> handleMinus(counter.id)}/>
            ))
          }
          
        </div>
      </div>
    </>
  )
}

export default App
