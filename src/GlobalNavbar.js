import { useState } from 'react';
import {Box, LinkTab, Tab, Tabs} from '@mui/material';

export default function GlobalNavbar() {

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Box className="nav">
      <Tabs value={tabIndex} onChange={handleTabChange}
          sx={{
            background: 'rgb(121,9,111)',
            background: 'linear-gradient(139deg, rgba(121,9,111,1) 0%, rgba(208,128,24,1) 86%, rgba(255,192,0,1) 100%)',
            color: 'white',
          }}>
        <Tab label="What's Happening?" sx={{color: 'white'}} />
        <Tab label="What To Bring" sx={{color: 'white'}} />
        <Tab label="The Day Of" sx={{color: 'white'}} />
        <Tab label="Registry" sx={{color: 'white'}} />
      </Tabs>
    </Box>
  );
}
