import { useRef, useState } from 'react';
import {Box, Link, LinkTab, Tab, Tabs} from '@mui/material';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function YosemiteRules() {
  const ref = useRef();
  return (
    <Parallax className="parallax wedding-party" pages={3} ref={ref} style={{background: '#000033'}}>
      <ParallaxLayer className="text" offset={0} speed={0.1} style={{zIndex: 9999}}>
        <Box>
          <h1>Important Dates</h1>
          <div className="event">
            <h2>Wedding Dress Shopping</h2>
            <p className="note"> (bridesmaids only)</p>
            <div className="date">
              Friday and Saturday August 26/27, 2023<br/>
              San Diego
            </div>
          </div>
          <div className="event">
            <h2>Rehearsal</h2>
            <div className="date">
              Friday July 12, 2024 - 12pm<br/>
              Gull Lake
            </div>
          </div>
          <div className="event">
            <h2>Wedding!</h2>
            <div className="date">
              Saturday July 13, 2024 - 5am - 11am<br/>
              Yosemite - Tenaya Lake
            </div>
          </div>
          <div className="event">
            <h2>Brunch</h2>
            <div className="date">
              Sunday July 14, 2024 - 10am<br/>
              Gull Lake
            </div>
          </div>
        </Box>
      </ParallaxLayer>
      <ParallaxLayer className="text" offset={1} speed={0.1} style={{zIndex: 9999}}>
        <Box>
          <h1>Lodging</h1>
          <img src={process.env.PUBLIC_URL + "/airbnb.png"}/>
          <p>The wedding party and immediate family will be staying in a couple AirBnbs we've reserved on Gull Lake, so no need to worry about lodging.</p>
          <p>Each couple will have their own bedroom and bathroom</p>
          <p>No pets, unfortunately</p>
        </Box>
      </ParallaxLayer>
    </Parallax>
  );
};