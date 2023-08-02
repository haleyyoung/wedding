import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Box, LinkTab, Tab, Tabs, TextField} from '@mui/material';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import GlobalNavbar from './GlobalNavbar.js';

import { animated, config, easings, useSpring } from '@react-spring/web';

import React, { useRef, useState } from 'react';
import { useGesture } from 'react-use-gesture'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import DayOf from './DayOf.jsx';

export default function Content() {
  const ref = useRef()
    const theme = createTheme({
    palette: {
      mode: 'dark',
      text: {
        primary: {
          main: '#ffffff',
          contrastText: '#000033',
        }
      },
      primary: {
        main: '#ffffff',
        contrastText: '#000033',
      },
      secondary: {
        main: '#ffaa00',
      },
      action: {
        active: '#ffaa00',
      },
    },
    overrides: {
      MuiTabs: {
        indicator: {
          backgroundColor: 'orange'
        }
      },
      MuiTab: {
        root: {
          "&:hover": {
            backgroundColor: 'pink',
            color: 'pink'
          }
        },
        selected: {
          backgroundColor: 'orange',
          color: 'orange',
          "&:hover": {
            backgroundColor: 'green',
            color: 'green'
          }
        }
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Parallax className="parallax App" pages={3} ref={ref}>
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
              <div className="content-2-columns">
                <div className="tenaya"><img src="/tenayaLakeSunset.jpg"/></div>
                <div className="disclaimer">
                  We're going on an adventure for our wedding, and we'd love if you'd
                  join us, but we also know that this is, by no means, a traditional
                  wedding. Please check out the pages here for all the info, and if -
                  for whatever reason - you'd rather not come, we encourage you to
                  choose for yourself, knowing there will be no hard feelings
                  on our end.
                  <br/>
                  ~ Haley and Garrison
                </div>
              </div>
              <div>Please let us know who you are, so we can show you relevant information</div>
              <TextField id="outlined-basic" label="Name" variant="outlined" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} style={{zIndex: 3}} speed={0.55}>
            <div className="image-2"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} style={{zIndex: 2}} speed={0.3}>
            <div className="image-3"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} style={{zIndex: 1}} speed={0.1}>
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
        </ParallaxLayer>
      </Parallax>
    </ThemeProvider>
  );
}