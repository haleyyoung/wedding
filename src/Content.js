import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Box, LinkTab, Tab, Tabs} from '@mui/material';


import { useState } from 'react';

export default function Content() {

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <div className="content">
      <img src={process.env.PUBLIC_URL + '/glacierPoint.jpg'}/>
      <div>
        You're invited to <br/> the wedding of <br/> Garrison Rios and Haley Young
	    </div>
    </div>
  );
}