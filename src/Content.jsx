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
    <Parallax className="parallax" pages={3} ref={ref}>
      <ParallaxLayer sticky={{ start: 0, end: 0.65 }} style={{zIndex: 4}} speed={0.4}>
        <div className="image-1"></div>
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 0, end: 0.75 }} style={{zIndex: 3}} speed={0.3}>
        <div className="image-2"></div>
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 0, end: 0.85}} style={{zIndex: 2}} speed={0.2}>
        <div className="image-3"></div>
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 0, end: 1 }} style={{zIndex: 1}} speed={0.1}>
        <div className="image-4"></div>
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 1.25, end: 2 }} style={{zIndex: 4}} speed={0.1}>
        <div className="navy-background"></div>
      </ParallaxLayer>
      <ParallaxLayer className="content" sticky={{ start: 0, end: 0.65 }} speed={0.1} style={{zIndex: 5}}>
        <div className="page-header-text">
          You're invited to <br/> the wedding of <br/> Garrison Rios and Haley Young
        </div>
      </ParallaxLayer>
      <ParallaxLayer className="content" offset={1} speed={0.1}>
        <div className="text">
          Tenaya Lake, Yosemite <br/> July 13, 2024 <br/> 9am
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1}>
        <button onClick={() => ref.current.scrollTo(0)}>Scroll to top</button>
      </ParallaxLayer>
    </Parallax>
  );
}