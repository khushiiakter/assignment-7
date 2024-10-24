

import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [coins, setCoins] = useState(0);
  const incrementCoins =() =>{
    setCoins(coins + 6000000);
  }

  return (
    <>
      <Navbar coins={coins}></Navbar>
      <Banner incrementCoins={incrementCoins}></Banner>
    
    </>
  )
}

export default App
