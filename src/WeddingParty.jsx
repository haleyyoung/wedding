import { useRef, useState } from 'react';
import {Box, Link, LinkTab, Tab, Tabs} from '@mui/material';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function YosemiteRules() {
  const ref = useRef();
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
        main: '#D48616',
      },
      action: {
        active: '#ffaa00',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="wedding-party page" style={{background: '#000033'}}>
        <Box>
          <h1>Important Dates</h1>
          <div className="event">
            <h2 className="title">Wedding Dress Shopping</h2>
            <p className="note"> (bridesmaids only)</p>
            <div className="date">
              Saturday and Sunday November 18-19, 2023<br/>
              San Diego or Temecula (undecided)
            </div>
          </div>
          <div className="event two">
            <h2 className="title">Rehearsal Dinner</h2>
            <div className="date">
              Friday July 12, 2024 - 4pm<br/>
              Gull Lake
            </div>
          </div>
          <div className="event three">
            <h2 className="title">Wedding!</h2>
            <div className="date">
              Saturday July 13, 2024 - 5am - 11am<br/>
              Yosemite - Tenaya Lake<br/><br/>
              7pm - 10pm<br/>
              June Lake
            </div>
          </div>
          <div className="event four">
            <h2 className="title">Breafkast</h2>
            <div className="date">
              Sunday July 14, 2024 - 9am<br/>
              Gull Lake
            </div>
          </div>
        </Box>
        <Box>
          <h1>Lodging</h1>
          <img className="airbnb-image" src={process.env.PUBLIC_URL + "/airbnbWithArrow.png"}/>
          <Box className="airbnb-text">
            <p>The wedding party and immediate family will be staying in a couple AirBnbs
            we've reserved on Gull Lake, so no need to worry about lodging.</p>
            <p>Each couple will have their own bedroom (definitely) and bathroom (likely).</p>
            <p>No pets, unfortunately.</p>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
};