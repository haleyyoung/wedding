import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Box, LinkTab, Tab, Tabs, TextField} from '@mui/material';
import Button from '@mui/material/Button';

import { animated, config, easings, useSpring } from '@react-spring/web';
import useUser, {findInvitedGuest, storeUser} from './hooks/useUser';

import React, { useRef, useState } from 'react';
import { useGesture } from 'react-use-gesture'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import DayOf from './DayOf.jsx';

export default function Content({notifyUserChange}) {
  const ref = useRef()


  const [user, setUser] = useState(useUser());
  const [username, setUsername] = useState('');

  const handleUsernameChange = (name) => {
    const invitedGuest = findInvitedGuest(name);
    if (invitedGuest) {
      storeUser(name);
      setUser(invitedGuest);
      if (invitedGuest.isWeddingParty || invitedGuest.isFamily) {
        notifyUserChange(true);
      }
    }
    setUsername(name);
  }

  const handleUsernameSubmit = (name) => {
    const storedUser = storeUser(name);
    setUser(storedUser);
  }

  return (
    <Parallax className="parallax App" pages={2.55} ref={ref}>
      <ParallaxLayer sticky={{start: 0, end: 0.75}}>
        <ParallaxLayer offset={0} style={{zIndex: 4}} speed={0.8}>
          <div className="image-1"></div>
          <div className="navy-background content">
            <div className="text">
              Tenaya Lake<span className="font-change">,</span> Yosemite <br/>
              <div className="time">
                July 13, 2024<br/>
                9am
              </div>
              June Lake <br/>
              <div className="time">8pm</div>
            </div>
            <div className="padded-content">
              <div className="tenaya"><img src="/tenayaLakeSunset.jpg"/></div>
              <div className="disclaimer">
                We're going on an adventure for our wedding, and we'd love if you'd
                join us, but we also know that this is, by no means, a traditional
                wedding. Please check out the pages here for all the info, and if -
                for whatever reason - you'd rather not come, we encourage you to
                choose for yourself, knowing there will be no hard feelings
                on our end.
                <div className="signature">- Haley and Garrison</div>
              </div>
            </div>
            <div className="user-form">
              <img className="mountains" src="/mountains.png"/>
              {(!user || user.isUnrecognizedUser) && (
                <div className="form-content">
                  <div>Please let us know who you are, so we can show you relevant information</div>
                  <div>
                  <TextField color="secondary" label="Name" variant="outlined" 
                      sx={{
                          margin: '15px',
                          "& .MuiOutlinedInput-notchedOutline": '1px solid #FAB903',
                          "& .MuiFormLabel-root": {
                            color: "white",
                          },
                          }}
                      value={username}
                      onChange={(e) => handleUsernameChange(e.target.value)}
                  />
                  <Button classname="submit-button" variant="contained" color="secondary" 
                      sx={{ marginLeft: '15px', marginTop: '25px', '@media (max-width: 700px)': {display: 'block', margin: '0 auto'}}}
                      onClick={(e) => handleUsernameSubmit(username)} disabled={username?.length < 2}>
                    Submit
                  </Button>
                </div>
                </div>
              )}
              {(user && username) && <div className="form-content welcome-back">Hi {user.name}!</div>}
            </div>
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
  );
}