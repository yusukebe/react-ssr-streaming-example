import React, { Suspense, useContext, useId, createContext } from 'react'
import CountUp from './CountUp'

let done = false

const sleep = (ms: number) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      done = true
      resolve(true)
    }, ms)
  )
}

const SometimesSuspend: React.FC = () => {
  if (done) {
    done = false
    return (
      <p>
        <b>Hello World!!</b>
      </p>
    )
  }
  throw sleep(2000)
}

const App = () => {
  return (
    <div>
      <h1>React Streaming SSR</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <SometimesSuspend />
      </Suspense>
      <CountUp />
    </div>
  )
}

export default App
