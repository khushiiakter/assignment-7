

import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import MainSection from './Components/MainSection/MainSection';
import Players from './Components/Players/Players';

function App() {
  const [coins, setCoins] = useState(0);
  const incrementCoins =() =>{
    setCoins(coins + 6000000);
  }

  return (
    <>
      <Navbar coins={coins}></Navbar>
      <Banner incrementCoins={incrementCoins}></Banner>
      <MainSection></MainSection>
      <Players></Players>
    </>
  )
}

export default App
