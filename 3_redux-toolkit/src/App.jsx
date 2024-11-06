
import './App.css'
import Counter from './components/Counter'
import TotalCount from './components/TotalCount'

function App() {
  const allCounters = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
  ]
  return (
    <>
        
      <div className="bg-indigo-400 text-black">

        <h1 className="max-w-md mx-auto text-center text-4xl font-bold">
          Counter
          <TotalCount total={10}/>
        </h1>

        <div className="mx-auto flex flex-wrap my-5 gap-3 justify-center">
          <Counter/>
          <Counter/>
          <Counter/>
          
        </div>
      </div>
    </>
  )
}

export default App
