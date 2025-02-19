import { Box } from "@mui/material";

import './index.css'
import { useEffect, useState } from "react";
export default function Video() {
  const [height,setHeight] = useState(window.innerHeight)

  useEffect(()=>{
    const updateSize = ()=> setHeight(window.innerHeight)

    window.addEventListener("resize",updateSize)

    return ()=>{
        window.removeEventListener("resize",updateSize)
    }
  },[])
    return (
    <Box 
    minHeight={height < 500 ? 250 : 750}
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
