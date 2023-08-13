import { useRef, useState } from 'react';
import {Box, Link, LinkTab, Tab, Tabs} from '@mui/material';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function Registry() {
  const ref = useRef();
  const theme = useTheme();
  return (
    <div className="registry page">
      <div className="page-title">
        Registry
      </div>
      <div className="section">
        <div className="note">
          Please don't feel obligated to bring a gift, we know it will be enough of an effort to come to our wedding.
        </div>
        We haven't signed up for any registries. We're well-established in our house
        and don't need kitchen trinkets and such. That being said, we are saving up for a few things.
      </div>
      <div className="content-2-columns">
        <div className="item order-2">A Winter vacation at the Ahwahnee Hotel in Yosemite</div>
        <img src={process.env.PUBLIC_URL + "/ahwahnee.jpg"}/>
      </div>
      <div className="content-2-columns">
        <div className="item order-2">Our honeymoon</div>
        <img className="order-2" src={process.env.PUBLIC_URL + "/hawaii.png"}/>
      </div>
      <div className="content-2-columns">
        <div className="item order-2">A new dryer</div>
        <img src={process.env.PUBLIC_URL + "/dryer.png"}/>
      </div>
      <div className="content-2-columns">
        <div className="item">A new dishwasher</div>
        <img className="order-2" src={process.env.PUBLIC_URL + "/dishwasher.png"}/>
      </div>
      <div className="content-2-columns">
        <div className="item order-2">A gift card to a location for a date idea of your choice.</div>
        <img src={process.env.PUBLIC_URL + "/date.png"}/>
      </div>
      <div className="section">
        If you'd like to gift towards any of these endeavors, just specify in your card which one your gift is for.
      </div>
      <img src={process.env.PUBLIC_URL + "/mountains.png"}/>
    </div>
  );
};