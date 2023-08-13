import { useRef, useState } from 'react';
import {Box, Link, LinkTab, Tab, Tabs} from '@mui/material';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function Registry() {
  const ref = useRef();
  const theme = useTheme();
  return (
    <div className="day-of page">
      <Box className="agenda-item">
        <div className="time">
          7:30 - 9am
        </div>
        <div className="title">
          Commute
        </div>
        <div className="text">
          Drive to
          <Link href="https://goo.gl/maps/so6z2n5h3kZJbGyR6" color="secondary" underline="none"> Tenaya Lake</Link>
          . You'll need a credit card (no cash accepted) for the $35 entry fee (we'll reimburse you).
          There can often be a line to get in on a Saturday morning, so plan accordingly
        </div>
      </Box>
      <Box className="agenda-item">
        <div className="time">
          9 - 9:30am
        </div>
        <div className="title">
          Wedding Ceremony
          <div className="text">
            {"Attire: "}
            <Link
              href="https://www.brides.com/story/wedding-dress-code-explained#mntl-sc-block_1-0-36"
              target="_blank"
              color="secondary"
              underline="none"
            >
              Destination
            </Link>
          </div>
        </div>
        <div className="text">
          Once you park, continue past the signs down the trail. Someone from the wedding party will be there
          to guide you to the ceremony location.
          <br/>
          (please review <Link href="/yosemite-rules" color="secondary" underline="none">Yosemite's Rules</Link>)
        </div>
      </Box>
      <Box className="agenda-item">
        <div className="time">
          9:30 - 11am
        </div>
        <div className="title">
          Breakfast Picnic
        </div>
      </Box>
      <Box className="agenda-item">
        <div className="time">
          11am - 8pm
        </div>
        <div className="title">
          Explore or Relax
        </div>
        <div className="text">
          This is <i>your time</i> to enjoy Yosemite. You're already in the park! Go on a hike, or visit a waterfall or nice feature.
          You have enough time to travel to the valley, we'd highly recommend it! Or if you want to stay in the high country,
          <Link href="https://goo.gl/maps/47hts9AJq7eeXcU47" target="_blank" color="secondary" underline="none"> Tuolumne Meadows </Link>
          is one of our favorite spots!
          <br/>
          There is also plenty to do in June Lake. Check out our <Link href="/planning" color="secondary" underline="none">planning page</Link> for
          a list of activities.
        </div>
      </Box>
      <Box className="agenda-item">
        <div className="time">
          8pm - 10pm
        </div>
        <div className="title">
          Dessert Bar (optional)
          <div className="text">
            {"Attire: "}
            <Link
              href="https://www.brides.com/story/wedding-dress-code-explained#mntl-sc-block_1-0-47"
              target="_blank"
              color="secondary"
              underline="none"
            >
              Come as you are
            </Link>
          </div>
        </div>
        <div className="text">
          Dessert bar and camp fire at our AirBnb. This is totally optional if you want to have the evening to yourself!
        </div>
      </Box>
    </div>
  );
};