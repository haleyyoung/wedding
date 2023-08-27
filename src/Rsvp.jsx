import { useRef, useState } from 'react';
import {Box, Link, LinkTab, Tab, Tabs} from '@mui/material';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import useUser from './hooks/useUser';

export default function Rsvp() {
  const ref = useRef();
  const user = useUser();
  return (
    <div className="rsvp page">
      <div className="page-title">
        RSVP
      </div>
      {user && (
        <div className="note">
          Please RSVP via mail by {user.rsvpDate}.
        </div>
      )}
      <img src={process.env.PUBLIC_URL + "/rsvp.jpg"}/>
    </div>
  );
};
