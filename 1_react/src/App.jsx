import { Suspense, useState } from 'react'
import './App.css'
import DataFetcher from './comp/DataFetcher'
import Parent from './state-manage/Parent'
import Parent2 from './performance/Parent2'
import LazyComponent from './performance/LazyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <DataFetcher />
      <Parent />
      <Parent2 />

      {/* <div>
        <Suspense fallback={<p>Loading...</p>}>
          <LazyComponent />
        </Suspense>
      </div> */}
    </>
  )
}

export default App
