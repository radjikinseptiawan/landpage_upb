import { Divider, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import AOS from 'aos'
import { useEffect } from "react";

interface studyList{
    faculty : string,
    programStudi : string[]
}

const StudiProgram : studyList[] = [
    {
        faculty : "Fakultas Teknik",
        programStudi : ["S1 Arsitektur","S1 Teknik Informatika","S1 Teknik Lingkngan","S1 Teknik Sipil","S1 Teknik Industri","S1 Teknologi Hasil Pertanian"]
    },{
        faculty : "Fakultas Hukum",
        programStudi : ["S1 Hukum"]
    },{
        faculty : "Fakultas Ekonomi Dan Bisnis",
        programStudi : ["S2 Manajemen","S1 Manajemen","S1 Kewirausahaan","S1 Bisnis Digital","S1 Ekonomi Syariat","D3 Akuntansi"]
    },{
        faculty : "Fakultas Ilmu Keguruan Dan Tarbiyah",
        programStudi : ["S1 Pendidikan Guru Sekolah Dasar","S1 Pendidikan Guru Pendidikan Anak Usia Dini","S1 Bimbingan dan Konseling Pendidikan Islam"]
    }

]

export default function ProdiSection(){
    
    useEffect(()=>{
        AOS.init([
            {
                duration:1000,
                once:true
            }
        ])
    },[])
    return(
        <>
        {
        StudiProgram.map((item : studyList ,index : number)=>(
            <Paper sx={{my:3,p:1}}>
            <Typography variant="h6" textAlign={"center"}>
                {item.faculty}
            </Typography>
            <Divider/>
                {item.programStudi.map((studi : string) =>(
                    <List>
                        <ListItem>
                            <ListItemText primary={studi} key={index}></ListItemText>
                        </ListItem>
                        <Divider variant="middle" component={"li"}/>
                    </List>
                ))}
            </Paper>
    ))      
        }
        </>
    )
}