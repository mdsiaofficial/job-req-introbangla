
import './App.css'
import { DependencyProvider } from './Contexts/DependencyProvider'
import FirstComp from './Components/FirstComp'

function App() {

  const service = {
    callMe: ()=>{
      console.log(`Call me function from dependency.`)
    }
  }
  return (
    <>
      <DependencyProvider service={service}>
        <FirstComp>

        </FirstComp>
      </DependencyProvider>
    </>
  )
}

export default App
