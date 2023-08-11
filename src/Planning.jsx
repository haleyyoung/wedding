import { useRef, useState } from 'react';
import {Box, Link, LinkTab, Tab, Tabs} from '@mui/material';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function Planning() {
  const ref = useRef();
  console.log("in day of??");
  return (
    <Parallax className="parallax what-to-bring" pages={3} ref={ref} style={{background: '#000033'}}>
      <ParallaxLayer className="text" offset={0} speed={0.1} style={{zIndex: 9999}}>
        <Box sx={{display: 'flex', gap: '20px', padding: '3em', textAlign: 'left'}}>
          <div className="time">
            7 - 7:45am
          </div>
          <div className="text">
            📄 If you forgot to print your documents, Hunter will be at the
            <Link href="https://goo.gl/maps/vCu7FjU1ZgniXATP9" color="secondary" underline="none"> gas station exiting June Lake </Link>
            with extra copies of the paperwork that you'll need to get in to the park
          </div>
        </Box>
      </ParallaxLayer>
      <ParallaxLayer className="text" offset={0.5} speed={0.1} style={{zIndex: 9999}}>
        <Box sx={{display: 'flex', gap: '20px', padding: '3em', textAlign: 'left'}}>
          <div className="time">
            7:45 - 9am
          </div>
          <div className="text">
            🚗 Drive to
            <Link href="https://goo.gl/maps/so6z2n5h3kZJbGyR6" color="secondary" underline="none"> Tenaya Lake</Link>
            . You'll need a credit card (no cash accepted) for the $35 entry fee (we'll reimburse you).
            There can often be a line to get in on a Saturday morning, so plan accordingly
          </div>
        </Box>
      </ParallaxLayer>
      <ParallaxLayer className="text" offset={1} speed={0.1} style={{zIndex: 9999}}>
        <Box sx={{display: 'flex', gap: '20px', padding: '3em', textAlign: 'left'}}>
          <div className="time">
            9 - 9:30am
          </div>
          <div className="text">
            🧖‍♀️🧖‍♂️ Wedding ceremony
          </div>
        </Box>
      </ParallaxLayer>
      <ParallaxLayer className="text" offset={1.5} speed={0.1} style={{zIndex: 9999}}>
        <Box sx={{display: 'flex', gap: '20px', padding: '3em', textAlign: 'left'}}>
          <div className="time">
            9:30 - 11am
          </div>
          <div className="text">
            🍴 Breakfast picnic
          </div>
        </Box>
      </ParallaxLayer>
      <ParallaxLayer className="text" offset={2} speed={0.1} style={{zIndex: 9999}}>
        <Box sx={{display: 'flex', gap: '20px', padding: '3em', textAlign: 'left'}}>
          <div className="time">
            11am - dark
          </div>
          <div className="text">
            🌲 This is <i>your time</i> to enjoy Yosemite. You're already in the park for free! Go on a hike, or visit a waterfall or nice feature.
            You have enough time to travel to the valley, we'd highly recommend it! Or if you want to stay in the high country,
            <Link href="https://goo.gl/maps/47hts9AJq7eeXcU47" target="_blank" color="secondary" underline="none"> Tuolumne Meadows </Link>
            is one of our favorite spots 😍
          </div>
        </Box>
      </ParallaxLayer>
      <ParallaxLayer className="text" offset={2.5} speed={0.1} style={{zIndex: 9999}}>
        <Box sx={{display: 'flex', gap: '20px', padding: '3em', textAlign: 'left'}}>
          <div className="time">
            2pm -
          </div>
          <div className="text">
            We'll be back in June Lake hanging out if anyone wants to join us
          </div>
        </Box>
      </ParallaxLayer>
    </Parallax>
  );
};