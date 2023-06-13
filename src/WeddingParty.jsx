import { useRef, useState } from 'react';
import {Box, Link, LinkTab, Tab, Tabs} from '@mui/material';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function YosemiteRules() {
  const ref = useRef();
  return (
    <Parallax className="parallax yosemite-rules" pages={3} ref={ref} style={{background: '#000033'}}>
      <ParallaxLayer className="text" offset={0} speed={0.1} style={{zIndex: 9999}}>
        <Box>
          <h2>Important Dates</h2>
          <ul>
            <li>
              Friday and Saturday August 26/27, 2023 - Wedding Dress Shopping (bridesmaids only)
            </li>
            <li>
              Friday July 12, 2024 - 12pm - Rehearsal - Gull Lake
            </li>
            <li>
              Saturday July 13, 2024 - 5am - 11am - Wedding!
            </li>
            <li>
              Sunday July 14, 2024 - 10am - Brunch
            </li>
          </ul>
        </Box>
      </ParallaxLayer>
      <ParallaxLayer className="text" offset={0} speed={0.1} style={{zIndex: 9999}}>
        <Box>
          <h2>Lodging</h2>
          <p>The wedding party and immediate family will be staying in a couple AirBnBs we've reserved on Gull Lake, so no need to worry about lodging.</p>
          <p>Each couple will have their own bedroom and bathroom</p>
          <p>No pets, unfortunately</p>
        </Box>
      </ParallaxLayer>
    </Parallax>
  );
};