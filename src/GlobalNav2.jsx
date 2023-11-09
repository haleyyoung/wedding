import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import {Link, useLocation} from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import useUser from './hooks/useUser';

const drawerWidth = 240;

export default function DrawerAppBar(userChanged) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(location.pathname);
  const user = useUser();
  const isWeddingParty = user?.isWeddingParty || user?.isFamily;

  const navItems = [
    {text: "What's Happening?", location: "/"},
    {text: "The Day Of", location: "/day-of"},
    {text: "Planning", location: "/planning"},
    {text: "Registry", location: "/registry"},
  ];
  const protectedNavItems = [
    {text: user?.isWeddingParty ? "Wedding Party" : "Family", location: "/wedding-party"},
    {text: "Rsvp", location: "/rsvp"},
    {text: "Photographers", location: "/photographers"},
  ];

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleNavChange = (tabPath) => {
    setActiveTab(tabPath);
  }

  const activeTabStyles = {
    '& span': {
      width: 'fit-content',
      margin: 'auto',
      borderBottom: '2px solid white',
    }
  };

  const tabs = () => {
    return navItems.map((item) => {
      const styles = item.location === activeTab ? activeTabStyles : {};
      return (<ListItem key={item.text} disablePadding>
          <ListItemButton to={item.location} sx={{ textAlign: 'center' }}>
            <ListItemText
              primary={item.text}
              sx={styles}
            />
          </ListItemButton>
        </ListItem>
      );
    });
  };

  const weddingPartyTabStyles = protectedNavItems[0].location === activeTab ? activeTabStyles : {};
  const rsvpTabStyles = protectedNavItems[1].location === activeTab ? activeTabStyles : {};
  const photographersTabStyles = protectedNavItems[2].location === activeTab ? activeTabStyles : {};

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {tabs()}
        {isWeddingParty && (
          <ListItem key={protectedNavItems[0].text} disablePadding>
            <ListItemButton to={protectedNavItems[0].location} sx={{ textAlign: 'center' }}>
              <ListItemText
                primary={protectedNavItems[0].text}
                sx={weddingPartyTabStyles}
              />
            </ListItemButton>
          </ListItem>
        )}
        {user && user.isPhotographer && (
          <ListItem key={protectedNavItems[2].text} disablePadding>
            <ListItemButton to={protectedNavItems[2].location} sx={{ textAlign: 'center' }}>
              <ListItemText
                primary={protectedNavItems[2].text}
                sx={photographersTabStyles}
              />
            </ListItemButton>
          </ListItem>
        )}
        {user && !user.isUnrecognizedUser && (
          <ListItem key={protectedNavItems[1].text} disablePadding>
            <ListItemButton to={protectedNavItems[1].location} sx={{ textAlign: 'center' }}>
              <ListItemText
                primary={protectedNavItems[1].text}
                sx={rsvpTabStyles}
              />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window.document.body : undefined;
  const rsvpTabClass = protectedNavItems[1].location === activeTab ? 'active' : null;
  const weddingPartyTabClass = protectedNavItems[0].location === activeTab ? 'active': null;
  const photographersTabClass = protectedNavItems[2].location === activeTab ? 'active': null;

  return (
    <Box className='desktop-nav' sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: 'linear-gradient(139deg, rgba(121,9,111,1) 0%, rgba(208,128,24,1) 86%, rgba(255,192,0,1) 100%)',
          '& .css-rdiatk-MuiButtonBase-root-MuiTab-root': {
            color: 'text.primary.main',
          },
          '& .css-rdiatk-MuiButtonBase-root-MuiTab-root.Mui-selected': {
            color: 'text.primary.contrastText',
          },
          marginBottom: "56px",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => {
              const tabClass = item.location === activeTab ? 'active': null;
              return (<Button className={tabClass} key={item.text} component={Link} to={item.location} sx={{ color: '#fff' }} onClick={() => handleNavChange(item.location)}>
                {item.text}
              </Button>
              );
            })}
            {user && !user.isUnrecognizedUser && (
              <Button
                className={rsvpTabClass}
                key={protectedNavItems[1].text}
                component={Link}
                to={protectedNavItems[1].location}
                sx={{ color: '#fff' }}
                onClick={() => handleNavChange(protectedNavItems[1].location)}
              >
                {protectedNavItems[1].text}
              </Button>
            )}
            {isWeddingParty && (
              <Button
                className={weddingPartyTabClass}
                key={protectedNavItems[0].text}
                component={Link}
                to={protectedNavItems[0].location}
                sx={{ color: '#fff' }}
                onClick={() => handleNavChange(protectedNavItems[0].location)}>
                {protectedNavItems[0].text}
              </Button>
            )}
            {user && user.isPhotographer && (
              <Button
                className={photographersTabClass}
                key={protectedNavItems[2].text}
                component={Link}
                to={protectedNavItems[2].location}
                sx={{ color: '#fff' }}
                onClick={() => handleNavChange(protectedNavItems[2].location)}>
                {protectedNavItems[2].text}
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="mobile-nav" sx={{marginBottom: "56px"}}>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: 'linear-gradient(139deg, #5f0758 0%, #973250 66%, rgba(208,128,24,1) 100%)',
              color: 'white'
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
