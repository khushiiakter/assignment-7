

import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import MainSection from './Components/MainSection/MainSection';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [coins, setCoins] = useState(0);
  const incrementCoins =() =>{
    setCoins(coins + 6000000);
    toast.success("Credit added to your account..")
  }

  return (
    <>
      <Navbar coins={coins}></Navbar>
      <Banner incrementCoins={incrementCoins}></Banner>
      <MainSection coins={coins} setCoins={setCoins}></MainSection>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        
        />

    </>
  )
}

export default App
