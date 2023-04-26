import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Box, LinkTab, Tab, Tabs} from '@mui/material';
import GlobalNavbar from './GlobalNavbar.js';

import { animated, useSpring } from '@react-spring/web';

import React, { useRef, useState } from 'react';
import { useGesture } from 'react-use-gesture'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import DayOf from './DayOf.jsx';

export default function Content() {

//   const [tabIndex, setTabIndex] = useState(0);

//   const handleTabChange = (event, newTabIndex) => {
//     setTabIndex(newTabIndex);
//   };


//   const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20
//   const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20

//   const wheel = (y) => {
//     console.log("here?")
//     // const imgHeight = window.innerWidth * 0.3 - 20
//     return `translateX(${y}px`
//   }

//   // const FadeIn = ({ isVisible, children }) => {
//   //   const styles = useSpring({
//   //     opacity: isVisible ? 1 : 0,
//   //     y: isVisible ? 0 : 24,
//   //   });
//   // }
// //   const styles = useSpring({
// //   from: {
// //     opacity: 0
// //   },
// //   to: {
// //     opacity: 1
// //   }
// // })

//   const domTarget = useRef(null)
//   const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
//     () => ({
//       rotateX: 0,
//       rotateY: 0,
//       rotateZ: 0,
//       scale: 1,
//       zoom: 0,
//       x: 0,
//       y: 0,
//       config: { mass: 5, tension: 350, friction: 40 },
//     })
//   )

//   const [{ wheelY }, wheelApi] = useSpring(() => ({ wheelY: 0 }))


//   useGesture(
//     {
//       onDrag: ({ active, offset: [x, y] }) =>
//         api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
//       onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
//       onMove: ({ xy: [px, py], dragging }) =>
//         !dragging &&
//         api({
//           rotateX: calcX(py, y.get()),
//           rotateY: calcY(px, x.get()),
//           scale: 1.1,
//         }),
//       onHover: ({ hovering }) =>
//         !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
//       onWheel: ({ event, offset: [, y] }) => {
//         event.preventDefault()
//         wheelApi.set({ wheelY: y })
//       },
//     },
//     { domTarget, eventOptions: { passive: false } }
//   )
  const ref = useRef()
  return (
    <Parallax className="parallax" pages={3} ref={ref} style={{background: '#000033'}}>
      <ParallaxLayer sticky={{start: 0, end: 3}}>
        <GlobalNavbar/>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{
          backgroundImage: '/stars.jpg',
          backgroundSize: 'cover',
        }}
      />
      <ParallaxLayer sticky={{ start: 0, end: 0.5 }} style={{zIndex: -1}}>
        <div className="image"></div>
      </ParallaxLayer>
      <ParallaxLayer className="content" offset={0} speed={0.1} style={{zIndex: 9999}}>
        <div className="page-header-text">
          You're invited to <br/> the wedding of <br/> Garrison Rios and Haley Young
        </div>
      </ParallaxLayer>

      <ParallaxLayer className="content" offset={1} speed={0.1} style={{zIndex: 9999}}>
        <div className="text">
          Tenaya Lake, Yosemite <br/> July 13, 2024 <br/> 9am
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={-2} factor={1.5} horizontal />

      <ParallaxLayer sticky={{ start: 1, end: 2 }} />

      <ParallaxLayer offset={2} speed={1}>
        <button onClick={() => ref.current.scrollTo(0)}>Scroll to top</button>
      </ParallaxLayer>
      <ParallaxLayer className="content" offset={2} speed={0.1} style={{zIndex: 9999}}>
        <DayOf/>
      </ParallaxLayer>
    </Parallax>
  );
  // return (
  //   <div className="content">
  //     <div className="text">
  //       Yyyyou're invited to <br/> the wedding of <br/> Garrison Rios and Haley Young
	//     </div>
  //     <div className="image"></div>
  //   </div>
  // );
}