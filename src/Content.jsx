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
    <Parallax className="parallax App" pages={3} ref={ref}
    >
      <ParallaxLayer sticky={{start: 0, end: 0.75}}>
        <ParallaxLayer offset={0} style={{zIndex: 4}} speed={0.8}>
          <div className="image-1"></div>
          <div className="navy-background content">
            <div className="text">
              July 13, 2024 <br/>
              Tenaya Lake, Yosemite <br/>
              9am <br/> <br/>
              June Lake <br/>
              8pm <br/>
            </div>
          </div>
          <div className="navy-background content"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} style={{zIndex: 3}} speed={0.3}>
          <div className="image-2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} style={{zIndex: 2}} speed={0.1}>
          <div className="image-3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} style={{zIndex: 1}} speed={0.01}>
          <div className="image-4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} className="content" speed={-0.2} style={{zIndex: 2}}>
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
        <ParallaxLayer offset={1.49} style={{zIndex: 6}} speed={0.01}>
          <div className="tenaya"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.49} style={{background: 'transparent', height: '25%', marginTop: '55%', zIndex: 7}} speed={0.2}>
          <div className="content">
            <div className="disclaimer">
              We're going on an adventure for our wedding, and we'd love if you'd
              join us, but we also know that this is, by no means, a traditional
              wedding. Please check out the pages here for all the info, and if -
              for whatever reason - you'd rather not come, we encourage you to
              make that choice for yourself, knowing there will be no hard feelings
              on our end.
              <br/>
              ~ Haley and Garrison
            </div>
          </div>
        </ParallaxLayer>
      </ParallaxLayer>
    </Parallax>
  );
}