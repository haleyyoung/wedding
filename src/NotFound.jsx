import { useRef, useState } from 'react';
import {Box, Link, LinkTab, Tab, Tabs} from '@mui/material';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import useUser from './hooks/useUser';

export default function NotFound() {
  console.log("hereee?")
  const ref = useRef();
  const user = useUser();
  return (
    <div className="not-found page">
      <div className="page-title">
        Not Found
      </div>
      <div>
        How'd you get here? Don't get too lost in the trees!
      </div>
      <img src={process.env.PUBLIC_URL + "/moose.png"}/>
    </div>
  );
};