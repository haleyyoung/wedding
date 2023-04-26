import React, { useRef, useState } from 'react';
import { Outlet } from "react-router-dom";
import {Box} from '@mui/material';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import GlobalNavbar from '../GlobalNavbar.js';

export default function Root() {
  const ref = useRef();

  return (
    <Parallax className="parallax" pages={3} ref={ref} style={{background: '#000033'}}>
      <ParallaxLayer sticky={{start: 0, end: 3}}>
        <GlobalNavbar/>
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 0, end: 0.5 }}>
        <Box sx={{paddingTop: '100px'}}>
          Stuff??
          <Outlet/>
        </Box>
      </ParallaxLayer>
    </Parallax>
  );
}
