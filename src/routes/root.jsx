import React, { useRef, useState } from 'react';
import { Outlet } from "react-router-dom";
import {Box} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import GlobalNav2 from '../GlobalNav2.jsx';

export default function Root(userChanged) {
  const ref = useRef();
  const theme = createTheme({
    palette: {
      mode: 'dark',
      text: {
        primary: '#ffffff',
        secondary: '#FAB903',
      },
      primary: {
        main: '#ffffff',
        contrastText: '#000033',
      },
      secondary: {
        //main: '#ffaa00',
        main: '#c0268f',
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
      },
      MuiLink: {
        color: '#79096F',
      },
      MuiTextfield: {
        root: {
          "& .MuiOutlinedInput-root":{"& > fieldset": {border: '1px solid green'}},
        },
      },
    },
  });

  return (
    <>
      <GlobalNav2 userChanged={userChanged}/>
      <ThemeProvider theme={theme}>
        <Outlet/>
      </ThemeProvider>
    </>
  );
}
