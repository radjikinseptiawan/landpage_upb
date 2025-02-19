import { Box } from "@mui/material";

import './index.css'
import { useEffect, useState } from "react";
export default function Video() {
  const [height,setHeight] = useState(window.innerHeight)
  const [width,setWidth] = useState(window.innerWidth)
  useEffect(()=>{
    const updateSize = ()=> setHeight(window.innerHeight)
    const updateWidth = ()=>setWidth(window.innerWidth)
    window.addEventListener("resize",updateSize)
    window.addEventListener("resize",updateWidth)
    return ()=>{
        window.removeEventListener("resize",updateSize)
        window.removeEventListener("resize",updateWidth)
    }
  },[])
    return (
    <Box 
    minHeight={height * width < 785920 ? 250 : 500}
    sx={{
        position:"relative",
        overflow:"hidden",
        }}>
        <div className="video">
            <video  src="videoplayback.mp4" autoPlay loop muted style={{
                position :"absolute",
                bottom:0,
                width:"100%",
                maxHeight:"100%",
                left:0,
                objectFit:"cover"
                }}></video>
        </div>
    </Box>
  )
}
