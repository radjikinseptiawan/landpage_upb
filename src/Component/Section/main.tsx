import { Box, Paper, Typography } from "@mui/material";
import Video from "./vid";
import { useEffect, useState } from "react";
import BasicTabs from "./tabs";

interface containt{
  namaKampus: string,
  motto : string,
  photoGedung : string
}

const mainContaint:containt =
    {
        namaKampus : "PMB 2025 Universitas Pelita Bangsa",
        motto : "MEGAH DIBUKA!",
        photoGedung : "download.jpg"
    }


    
  
export default function MainSection() {
  const [width,setWidth] = useState<number>(window.innerWidth)

  useEffect(()=>{
    const widthSize = ()=> setWidth(window.innerWidth)
    window.addEventListener("resize",widthSize)

    return ()=> window.removeEventListener("resize",widthSize)
  },[])
  return (
    <Box>
      <Video></Video>
      <Typography sx={{paddingLeft:4,paddingTop:4}} variant="h4">{mainContaint.namaKampus}</Typography>
      <Typography sx={{paddingLeft:4}} variant="h5">{mainContaint.motto}</Typography>
    </Box>
  )
}
