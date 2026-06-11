
import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
.then(res => res.json())

function App() { 

  return (
    <>
      <h1>World on the go...</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
