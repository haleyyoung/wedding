import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Box, LinkTab, Tab, Tabs} from '@mui/material';

import { animated, useSpring } from '@react-spring/web';

import { useState } from 'react';

export default function Content() {

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  // const FadeIn = ({ isVisible, children }) => {
  //   const styles = useSpring({
  //     opacity: isVisible ? 1 : 0,
  //     y: isVisible ? 0 : 24,
  //   });
  // }
  const styles = useSpring({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
})

  return (
    <div className="content">
      <div className="text">
        You're invited to <br/> the wedding of <br/> Garrison Rios and Haley Young
	    </div>
      <div className="image"></div>
      <animated.div style={styles}>
        Testing parallax?
      </animated.div>
    </div>
  );
}