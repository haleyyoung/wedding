import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Box, LinkTab, Tab, Tabs, TextField} from '@mui/material';
import Button from '@mui/material/Button';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';

import { animated, config, easings, useSpring } from '@react-spring/web';
import useUser, {findInvitedGuest, storeUser} from './hooks/useUser';

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
        primary: '#ffffff',
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

  const [user, setUser] = useState(useUser());
  const [username, setUsername] = useState('');

  const handleUsernameChange = (name) => {
    const invitedGuest = findInvitedGuest(name);
    if (invitedGuest) {
      storeUser(name);
      setUser(invitedGuest);
    }
    setUsername(name);
  }

  const handleUsernameSubmit = (name) => {
    const storedUser = storeUser(name);
    setUser(storedUser);
  }

  return (
    <ThemeProvider theme={theme}>
      <Parallax className="parallax App" pages={3} ref={ref}>
        <ParallaxLayer sticky={{start: 0, end: 0.75}}>
          <ParallaxLayer offset={0} style={{zIndex: 4}} speed={0.8}>
            <div className="image-1"></div>
            <div className="navy-background content">
              <div className="text">
                Tenaya Lake, Yosemite <br/>
                <div className="time">
                  July 13, 2024<br/>
                  9am
                </div>
                June Lake <br/>
                <div className="time">8pm</div>
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
              {(!user || user.isUnrecognizedUser) && (
                <>
                  <div>Please let us know who you are, so we can show you relevant information</div>
                  <TextField id="outlined-basic" label="Name" variant="outlined" value={username} onChange={(e) => handleUsernameChange(e.target.value)}/>
                  <Button variant="contained" onClick={(e) => handleUsernameSubmit(username)}>
                    Submit
                  </Button>
                </>
              )}
              {(user && username) && <div className="welcome-back">Hi {user.name}!</div>}
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
              {(user && !username) &&
                <div className="piece small">
                  Welcome back, {user.name}!
                </div>
              }
              {(user && username) &&
                <div className="piece small">
                  Hi {user.name}!
                </div>
              }
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