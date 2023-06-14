import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import GlobalNavbar from './GlobalNavbar.js';
import Content from './Content.jsx';
import DayOf from './DayOf.jsx';
import YosemiteRules from './YosemiteRules.jsx';
import WhatToBring from './WhatToBring.jsx';
import WeddingParty from './WeddingParty.jsx';
import Root from "./routes/root.jsx";
import ParallaxTest from './ParallaxTest.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "",
          element: <Content />,
        },
      ],
    },
    {
      path: "/day-of",
      element: <Root/>,
      children:[
        {
          path: "",
          element: <DayOf />,
        },
      ],
    },
    {
      path: "/what-to-bring",
      element: <Root/>,
      children:[
        {
          path: "",
          element: <WhatToBring />,
        },
      ],
    },
    {
      path: "/yosemite-rules",
      element: <Root/>,
      children:[
        {
          path: "",
          element: <YosemiteRules />,
        },
      ],
    },
    {
      path: "/wedding-party",
      element: <Root/>,
      children:[
        {
          path: "",
          element: <WeddingParty />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
      <title>Garrison and Haley</title>
      <header>
        <title>Garrison and Haley</title>
      </header>
    </div>
  );
};

export default App;