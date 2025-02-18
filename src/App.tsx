import { Box, Button } from '@mui/material'
import './App.css'
import ProdiSection from './Component/Section'
import { useEffect, useState } from 'react'
import MainSection from './Component/Section/main'
import Navigation from './Component/Navigation'

function App() {
  const [screen,setScreen] = useState(window.innerWidth)
  
  useEffect(()=>{
    const handleSize = ()=> setScreen(window.innerWidth)

    window.addEventListener("resize",handleSize)

    return ()=> window.removeEventListener("resize",handleSize)
  },[])
  return (
    <>
    <Box zIndex={20}>
    <Navigation></Navigation>
    </Box>
    <Box display={"flex"} zIndex={0} justifyItems={"center"} flexDirection={"column"} sx={{p:5,mt:4}}>
    <MainSection></MainSection>
    <Box display={"grid"} zIndex={0} gridTemplateRows={ screen > 800 ? "repeat(2,1fr)" : "repeat(1,0.3fr)"} gridTemplateColumns={screen > 800 ?"repeat(2,1fr)" : "repeat(1,1fr)"} gap={5}>
    <ProdiSection></ProdiSection>
    </Box>
    <Box display={"flex"} zIndex={0} justifyItems={"center"} alignItems={"center"}>
        <Button sx={{mx:"auto",backgroundColor:"darkred"}} size="large" target='_blank' variant="contained" href="https://pmb.pelitabangsa.ac.id/pb/pmb">Daftar Sekarang!</Button>
    </Box>
    </Box>
    </>
  )
}

export default App
