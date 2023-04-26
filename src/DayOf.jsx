import { useState } from 'react';
import {Box, Link, LinkTab, Tab, Tabs} from '@mui/material';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';

export default function DayOf() {
  console.log("in day of??");
  return (
    <Box sx={{color: "white"}}>
      7am - 7:45am
      Hunter will be at the gas station exiting June Lake with extra copies
      of the paperwork you'll need to get in to the park if you forgot to print
      them before leaving.
      <Link href="https://goo.gl/maps/vCu7FjU1ZgniXATP9">Google maps</Link>
    </Box>
  );
};