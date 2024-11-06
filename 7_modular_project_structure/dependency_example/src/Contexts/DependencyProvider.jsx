import {createContext, useContext} from 'react'
const DependencyContext = createContext()

export function useDependency(){
  return useContext(DependencyContext)
}

export function DependencyProvider({service, children}){
  return(
    <DependencyContext.Provider value={service}>
      {children}
    </DependencyContext.Provider>
  )
}