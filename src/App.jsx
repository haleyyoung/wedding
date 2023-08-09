import React, {useState} from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import Content from './Content.jsx';
import DayOf from './DayOf.jsx';
import YosemiteRules from './YosemiteRules.jsx';
import WhatToBring from './WhatToBring.jsx';
import WeddingParty from './WeddingParty.jsx';
import Root from "./routes/root.jsx";

function App() {
  const [userChanged, setUserChanged] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root userChanged={userChanged}/>,
      children: [
        {
          path: "",
          element: <Content notifyUserChange={setUserChanged}/>,
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