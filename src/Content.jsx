import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Box, LinkTab, Tab, Tabs} from '@mui/material';
import GlobalNavbar from './GlobalNavbar.js';

import { animated, config, easings, useSpring } from '@react-spring/web';

import React, { useRef, useState } from 'react';
import { useGesture } from 'react-use-gesture'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import DayOf from './DayOf.jsx';

export default function Content() {
  const ref = useRef()
  return (
    <Parallax className="parallax" pages={3} ref={ref} config={
    {
      mass: 5,
      tension: 180,
      friction: 180,
}}>
      <ParallaxLayer sticky={{start: 0, end: 2}}>
        <ParallaxLayer offset={0} style={{zIndex: 4}} speed={0.8}>
          <div className="image-1"></div>
          <div className="navy-background"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} style={{zIndex: 3}} speed={0.6}>
          <div className="image-2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} style={{zIndex: 2}} speed={0.3}>
          <div className="image-3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} style={{zIndex: 1}} speed={0.1}>
          <div className="image-4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} style={{zIndex: 4}} speed={0.8}>
          <div className="navy-background"></div>
        </ParallaxLayer>
        <ParallaxLayer className="content" sticky={{ start: 0, end: 2 }} speed={1} style={{zIndex: 2}}>
          <div className="page-header-text">
            <span className="piece">
              Garrison Rios
            </span>
            <span className="piece">
              {" and "}
            </span>
            <span className="piece">
              Haley Young
            </span>
            <span style={{display: 'block'}}>
              invite you to join them!
            </span>
          </div>
        </ParallaxLayer>
      </ParallaxLayer>
      <ParallaxLayer className="content" offset={1}>
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