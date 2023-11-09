import {Button, IconButton, InputAdornment, Link, Modal, TextField} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import useUser, {findInvitedGuest, removeUser, storeUser} from './hooks/useUser';

import React, { useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function Content({notifyUserChange}) {
  const ref = useRef();

  const [user, setUser] = useState(useUser());
  const [passwordRequired, setPasswordRequired] = useState(false);
  const [username, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  const [potentialUser, setPotentialUser] = useState(null);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [open, setOpen] = useState(!user);

  const handleUsernameChange = (name) => {
    const invitedGuest = findInvitedGuest(name, lastname);
    if (invitedGuest) {
      if (invitedGuest.isWeddingParty || invitedGuest.isFamily || invitedGuest.isPhotographer) {
        setPotentialUser(invitedGuest);
        setPasswordRequired(true);
      }
      else {
        storeUser(name, lastname);
        setUser(invitedGuest);
        notifyUserChange(invitedGuest);
        setOpen(false);
      }
    }
    setUsername(name);
  }

  const handleLastnameChange = (name) => {
    const invitedGuest = findInvitedGuest(username, name);
    if (invitedGuest) {
      if (invitedGuest.isWeddingParty || invitedGuest.isFamily || invitedGuest.isPhotographer) {
        setPotentialUser(invitedGuest);
        setPasswordRequired(true);
      }
      else {
        storeUser(username, name);
        setUser(invitedGuest);
        notifyUserChange(invitedGuest);
        setOpen(false);
      }
    }
    setLastname(name);
  }

  const uppercaseNames = (name) => {
    return name.split(" ").map((namePart) => {
      return namePart.charAt(0).toUpperCase() + namePart.slice(1);
    }).join(" ");
  }

  const handleUsernameSubmit = (name, name2) => {
    setOpen(false);
    const storedUser = storeUser(uppercaseNames(name), uppercaseNames(name2));
    setUser(storedUser);
    notifyUserChange(storedUser);
  }

  const handlePasswordChange = (password) => {
    setPassword(password);
    setWrongPassword(false);
    if (password.toLowerCase() === potentialUser.password) {
      notifyUserChange(potentialUser);
      storeUser(potentialUser.name, potentialUser.lastName);
      setUser(potentialUser);
      setPasswordRequired(false);
      setOpen(false);
    }
  }

  const clearUser = () => {
    setUser(null);
    removeUser();
    setUsername('');
    setLastname('');
    notifyUserChange(null);
    setPotentialUser(null);
    setPassword('');
    setPasswordRequired(false);
    setShowPassword(false);
    setWrongPassword(false);
    setOpen(true);
  }

  const handleClose = () => {

  }

  return (
    <>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
      }}
    >
      <div className="user-form">
        <img className="mountains" src="/mountains.png" alt="mountains"/>
        <div className="form-content">
          <div style={{color: 'white'}}>Please let us know who you are, so we can show you relevant information</div>
          <TextField color="secondary" label="First Name" variant="outlined"
              sx={{
                  margin: '15px',
                  "& .MuiFormLabel-root": {
                    color: "white",
                  },
                  }}
              value={username}
              onChange={(e) => handleUsernameChange(e.target.value)}
              disabled={passwordRequired}
          />
          <TextField color="secondary" label="Last Name" variant="outlined"
              sx={{
                  margin: '15px',
                  "& .MuiFormLabel-root": {
                    color: "white",
                  },
                  }}
              value={lastname}
              onChange={(e) => handleLastnameChange(e.target.value)}
              disabled={passwordRequired}
          />
          {passwordRequired && (
            <TextField color="secondary" label="Password" variant="outlined" className="password"
              sx={{
                margin: '15px',
                "& .MuiFormLabel-root": {
                  color: "white",
                },
                "& .MuiInputBase-root": {
                  padding: 0,
                },
              }}
              type={showPassword ? 'text' : 'password'}
              InputProps={{
               endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    sx={{'& .MuiSvgIcon-root': {position: 'absolute', marginRight: '50px'}}}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              )}}
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
          )}
          <div className="wrong-password">
            {wrongPassword && "The entered password is incorrect"}
          </div>
          {!potentialUser && (
            <Button className="submit-button" variant="contained" color="secondary"
                sx={{ marginLeft: '15px', marginTop: '25px', '@media (max-width: 700px)': {display: 'block', margin: '0 auto'}}}
                onClick={(e) => handleUsernameSubmit(username, lastname)} disabled={username?.length < 2 || lastname?.length < 2}>
              Submit
            </Button>
          )}
          {potentialUser && (
            <>
              <Button className="submit-button" variant="contained" color="secondary"
                  sx={{ marginLeft: '15px', marginTop: '25px', '@media (max-width: 700px)': {display: 'block', margin: '0 auto'}}}
                  onClick={(e) => setWrongPassword(true)} disabled={password?.length < 2}>
                Submit
              </Button>
              <Button className="submit-button" variant="outlined" color="secondary"
                  sx={{ marginLeft: '15px', marginTop: '25px', '@media (max-width: 700px)': {display: 'block', margin: '0 auto'}}}
                  onClick={clearUser}>
                Clear Form
              </Button>
            </>
          )}
        </div>
      </div>
    </Modal>
    <Parallax className="parallax App" pages={2} ref={ref}>
      <ParallaxLayer sticky={{start: 0, end: 0.75}}>
        <ParallaxLayer offset={0} style={{zIndex: 4}} speed={0.8}>
          <div className="image-1"></div>
          <img className="chevron" src="/chevron.gif" alt="down-arrow"/>
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
              <div className="tenaya"><img src="/tenayaLakeSunset.jpg" alt="tenaya lake"/></div>
              <div className="disclaimer">
                We're going on an adventure for our wedding, and we'd love if you'd
                join us. We know that this is, by no means, a traditional
                wedding so please check out the pages here for all the info. If -
                for whatever reason - you can't come, we understand.
                <div className="signature">- Haley and Garrison</div>
              </div>
            </div>
            {user && (
              <div className="logout">
                <img className="mountains" src="/mountains.png" alt="mountains"/>
                <div className="form-content">
                    <>
                      <div>Hi {user.name}!</div>
                      <div>Wrong name? <Link onClick={clearUser} color="primary">Log out</Link></div>
                    </>
                </div>
              </div>
            )}
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
    </>
  );
}
