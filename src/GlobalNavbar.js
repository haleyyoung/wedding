import { useState } from 'react';
import {Box, LinkTab, Tab, Tabs} from '@mui/material';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';

export default function GlobalNavbar() {

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  // const theme = useTheme();

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
        main: '#000033',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#ffaa00',
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

  return (

    <ThemeProvider theme={theme}>
      <Box className="nav">
        <Tabs value={tabIndex} onChange={handleTabChange}
            centered
            indicatorColor="primary"
            sx={{
              background: 'rgb(121,9,111)',
              background: 'linear-gradient(139deg, rgba(121,9,111,1) 0%, rgba(208,128,24,1) 86%, rgba(255,192,0,1) 100%)',
              '& .css-rdiatk-MuiButtonBase-root-MuiTab-root': {
                color: 'text.primary.main',
              },
              '& .css-rdiatk-MuiButtonBase-root-MuiTab-root.Mui-selected': {
                color: 'text.primary.contrastText',
              },
            }}
            >
          <Tab label="What's Happening?"/>
          <Tab label="What To Bring" textColor="secondary"/>
          <Tab label="The Day Of" textColor="primary"/>
          <Tab label="Registry" textColor="primary"/>
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
