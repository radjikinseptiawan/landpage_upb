import { Box, Typography } from "@mui/material";

const mainContaint =
    {
        namaKampus : "PMB 2025 Universitas Pelita Bangsa",
        motto : "MEGAH DIBUKA!",
        photoGedung : "download.jpg"
    }


export default function MainSection() {
  return (
    <Box>
    <Box sx={{p:1,background:`url(${mainContaint.photoGedung})`,backgroundRepeat:"no-repeat", width:'100%'}} height={225} minWidth={100}></Box>
      <Typography variant="h4">{mainContaint.namaKampus}</Typography>
      <Typography variant="h5">{mainContaint.motto}</Typography>
    </Box>
  )
}
