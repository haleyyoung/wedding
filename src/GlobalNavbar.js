import { useState } from 'react';
import {Box, LinkTab, Tab, Tabs} from '@mui/material';

export default function GlobalNavbar() {

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Box>
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="What's Happening?" />
        <Tab label="What To Bring" />
        <Tab label="The Day Of" />
        <Tab label="Registry" />
      </Tabs>
    </Box>
  );
}
