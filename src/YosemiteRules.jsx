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
          <h2>We're getting married in a National Park, so with that comes some unusual rules for a wedding...</h2>
          <ul>
            <li>
              No trampling the meadows, please be respectful of the park
            </li>
            <li>
              No excessive noise, again, please be respectful of others trying to enjoy the park
            </li>
            <li>
              No chairs at the ceremony, sanding room only (except elderly people - aka Haley's 93 year old Grandpa 😉)
            </li>
            <li>
              We can only comandeer <i>one</i> picnic table. Please be prepared to sit on the sand for breakfast.
              We'll have picnic blankes for everyone to use.
            </li>
          </ul>
        </Box>
      </ParallaxLayer>
    </Parallax>
  );
};