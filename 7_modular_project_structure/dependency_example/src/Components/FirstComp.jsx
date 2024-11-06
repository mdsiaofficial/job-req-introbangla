import React from 'react'
import { useDependency } from '../Contexts/DependencyProvider'

const FirstComp = () => {
  const { service } = useDependency()

  // Check if service is defined before calling callMe
  if (service) {
    service.callMe()
  } else {
    console.warn('Service is undefined')
  }

  return (
    <div>FirstComp</div>
  )
}

export default FirstComp