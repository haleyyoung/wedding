import React, { useRef, useState } from 'react';
import { Outlet } from "react-router-dom";
import {Box} from '@mui/material';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import GlobalNav2 from '../GlobalNav2.jsx';

export default function Root() {
  const ref = useRef();

  return (
    <>
      <GlobalNav2/>
      <Outlet/>
    </>
  );
}
