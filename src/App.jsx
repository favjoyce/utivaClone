import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header';
import Button from './component/Button'
import Hero from './component/Hero'

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
