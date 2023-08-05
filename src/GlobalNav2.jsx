import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const navItems = [
  {text: "What's Happening?", location: "/"},
  {text: "What To Bring", location: "/what-to-bring"},
  {text: "The Day Of", location: "/day-of"},
];
const protectedNavItems = [
  {text: "Wedding Party", location: "/wedding-party"},
];
const wedddingParty = [
  "Haley Young",
  "Garrison Rios",
  "Hunter Young",
  "Hailey Young",
  "Meggie Rios",
  "Meaghan Rios",
  "Katelyn Sprofera",
  "Justin Wilson",
  "Mallory Wilson",
  "Teresa Young",
  "Ralph Young",
  "Anne Harjer",
  "Gary Sexton",
  "Danny Rios",
  "Daniel Rios",
  "Barb Sprofera",
  "Barbara Sprofera",
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(window ? window().location.pathname : '/');
  const [user, setUser] = useState(localStorage.getItem('user') || '');
  const [isUserWeddingParty, setIsUserWeddingParty] = useState(
    !!wedddingParty.find((person) => person.toLowerCase() === user.toLowerCase())
  );
  console.log("user", user, isUserWeddingParty);
  console.log("mobileOpen", mobileOpen);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleNavChange = (tabPath) => {
    setActiveTab(tabPath);
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton to={item.location} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        {isUserWeddingParty && protectedNavItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton to={item.location} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className='desktop-nav' sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: 'rgb(121,9,111)',
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
            {navItems.map((item) => (
              <Button className={item.location == activeTab && 'active'} key={item.text} component={Link} to={item.location} sx={{ color: '#fff' }} onClick={() => handleNavChange(item.location)}>
                {item.text}
              </Button>
            ))}
            {isUserWeddingParty && protectedNavItems.map((item) => (
              <Button className={item.location == activeTab && 'active'} key={item.text} component={Link} to={item.location} sx={{ color: '#fff' }} onClick={() => handleNavChange(item.location)}>
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{marginBottom: "56px"}}>
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
              background: 'linear-gradient(139deg, rgba(121,9,111,1) 0%, #973250 66%, rgba(208,128,24,1) 100%)',
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