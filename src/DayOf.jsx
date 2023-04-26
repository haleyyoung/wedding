import { useRef, useState } from 'react';
import {Box, Link, LinkTab, Tab, Tabs} from '@mui/material';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function DayOf() {
  const ref = useRef();
  console.log("in day of??");
  return (
    <Parallax className="parallax" pages={3} ref={ref} style={{background: '#000033'}}>
      <ParallaxLayer className="content" offset={0} speed={0.1} style={{zIndex: 9999}}>
        <Box sx={{color: "white"}}>
          7am - 7:45am
          Hunter will be at the gas station exiting June Lake with extra copies
          of the paperwork you'll need to get in to the park if you forgot to print
          them before leaving.
          <Link href="https://goo.gl/maps/vCu7FjU1ZgniXATP9">Google maps</Link>
        </Box>
      </ParallaxLayer>
      <ParallaxLayer className="content" offset={1} speed={0.1} style={{zIndex: 9999}}>
        <Box sx={{color: "white"}}>
          8am - 9am
          Other stuff
          <Link href="https://goo.gl/maps/vCu7FjU1ZgniXATP9">Google maps</Link>
        </Box>
      </ParallaxLayer>
    </Parallax>
  );
};