import { Box, Typography } from "@mui/material";
const navigationContaint = {
    title : "Universitas Pelita Bangsa"
}
export default function Navigation() {
  return (
    <Box sx={{backgroundColor:"darkred",p:1}} zIndex={22} position={"fixed"} alignItems={"center"} alignContent={"center"} display={"flex"} top={0} width={"100%"}  minWidth={100}>
    <img src="Logo-Universitas-Pelita-Bangsa.png" width={70}></img>
    <Typography sx={{color:'white'}} variant="h6">{navigationContaint.title}</Typography>
    </Box>
  )
}
