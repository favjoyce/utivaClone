import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header';
import Button from './component/Button'
import Hero from './component/hero'

function App() {
  

  return (
    <div>
      <div>
        <Header/>
        <Hero/>
      </div>
    </div>
  )
}

export default App
