import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Box, LinkTab, Tab, Tabs} from '@mui/material';
import GlobalNavbar from './GlobalNavbar.js';

import { animated, useSpring } from '@react-spring/web';

import React, { useRef, useState } from 'react';
import { useGesture } from 'react-use-gesture'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import DayOf from './DayOf.jsx';

export default function Content() {
  const ref = useRef()
  return (
    <Parallax className="parallax" pages={3} ref={ref} style={{background: '#000033'}}>
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{
          backgroundImage: '/stars.jpg',
          backgroundSize: 'cover',
        }}
      />
      <ParallaxLayer sticky={{ start: 0, end: 0.5 }} style={{zIndex: -1}}>
        <div className="image"></div>
      </ParallaxLayer>
      <ParallaxLayer className="content" offset={0} speed={0.1} style={{zIndex: 9999}}>
        <div className="page-header-text">
          You're invited to <br/> the wedding of <br/> Garrison Rios and Haley Young
        </div>
      </ParallaxLayer>

      <ParallaxLayer className="content" offset={1} speed={0.1} style={{zIndex: 9999}}>
        <div className="text">
          Tenaya Lake, Yosemite <br/> July 13, 2024 <br/> 9am
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={-2} factor={1.5} horizontal />

      <ParallaxLayer sticky={{ start: 1, end: 2 }} />

      <ParallaxLayer offset={2} speed={1}>
        <button onClick={() => ref.current.scrollTo(0)}>Scroll to top</button>
      </ParallaxLayer>
    </Parallax>
  );
}