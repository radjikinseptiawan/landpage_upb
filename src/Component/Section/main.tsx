import { Box, Paper, Typography } from "@mui/material";
import Video from "./vid";

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

const kampusLocate = [
  {
    nama:"Kampus Cikarang",
    maps : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.718352195795!2d107.16428407381339!3d-6.324611645523574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699b0c08ad8d01%3A0x2b18001d1b1371f9!2sUNIVERSITAS%20PELITA%20BANGSA!5e1!3m2!1sid!2sid!4v1739922473967!5m2!1sid!2sid"},
    {
      nama : "Kampus Bekasi",
      maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108904.280178435!2d106.91165003174464!3d-6.241975599999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c3aa4bb2535%3A0xc3905c2f4316ca40!2sUniversitas%20Pelita%20Bangsa%20Kampus%20Bekasi!5e1!3m2!1sid!2sid!4v1739922698569!5m2!1sid!2sid"
    },{
      nama : "Kampus Karawang",
      maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.676181163723!2d107.33333187425121!3d-6.331015061945359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69774f459b1f23%3A0x456389e64d03efb5!2sUniversitas%20Pelita%20Bangsa%20Kampus%20Karawang!5e1!3m2!1sid!2sid!4v1739922815123!5m2!1sid!2sid"

    }]

  
export default function MainSection() {
  return (
    <Box>
      <Video></Video>
      <Typography sx={{paddingLeft:4,paddingTop:4}} variant="h4">{mainContaint.namaKampus}</Typography>
      <Typography sx={{paddingLeft:4}} variant="h5">{mainContaint.motto}</Typography>
      <Typography variant="h6" sx={{pl:4}}>Lokasi Kampus</Typography>
      <Box display={"flex"} sx={{ml:4}} gap={5} justifyItems={"center"} justifyContent={"center"}>
        
        {kampusLocate.map(item =>{
          return(
            <>
            <Paper sx={{p:1,my:2}}>
          <Typography variant="h5" sx={{my:2}}>{item.nama}</Typography> 
          <iframe src={item.maps} width="300" height="300"  loading="lazy"></iframe>
        </Paper>
            </>
          )
        })}
      </Box>
    </Box>
  )
}
