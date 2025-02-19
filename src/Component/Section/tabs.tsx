import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Paper, Typography } from '@mui/material';


const kampusLocate = [
  {
    nama:"Cikarang",
    maps : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.718352195795!2d107.16428407381339!3d-6.324611645523574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699b0c08ad8d01%3A0x2b18001d1b1371f9!2sUNIVERSITAS%20PELITA%20BANGSA!5e1!3m2!1sid!2sid!4v1739922473967!5m2!1sid!2sid"},
    {
      nama : "Bekasi",
      maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108904.280178435!2d106.91165003174464!3d-6.241975599999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c3aa4bb2535%3A0xc3905c2f4316ca40!2sUniversitas%20Pelita%20Bangsa%20Kampus%20Bekasi!5e1!3m2!1sid!2sid!4v1739922698569!5m2!1sid!2sid"
    },{
      nama : "Karawang",
      maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.676181163723!2d107.33333187425121!3d-6.331015061945359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69774f459b1f23%3A0x456389e64d03efb5!2sUniversitas%20Pelita%20Bangsa%20Kampus%20Karawang!5e1!3m2!1sid!2sid!4v1739922815123!5m2!1sid!2sid"

    }]


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width:300 }}>
      <Box sx={{ borderBottom: 1, display:"flex",justifyContent:"center",justifyItems:"center", borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Cikarang" {...a11yProps(0)} />
          <Tab label="Bekasi" {...a11yProps(1)} />
          <Tab label="Karawang" {...a11yProps(2)} />
        </Tabs>
      </Box>
      
      {kampusLocate.map((item,index)=>(
        <CustomTabPanel value={value} index={index}>
        <Paper sx={{my:2,display:"flex",minWidth:300,justifyItems:"center",justifyContent:"center",alignItems:"center",alignContent:"center"}}>
          <iframe src={item.maps} width="270" height="270"  loading="lazy"></iframe>
        </Paper>
      
        </CustomTabPanel>
      ))}
    </Box>
  );
}
