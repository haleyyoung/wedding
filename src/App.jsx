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
import Planning from './Planning.jsx';
import Registry from './Registry.jsx';
import Rsvp from './Rsvp.jsx';
import WeddingParty from './WeddingParty.jsx';
import NotFound from './NotFound.jsx';
import Root from "./routes/root.jsx";

function App() {
  const [userChanged, setUserChanged] = useState(null);
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
      path: "/planning",
      element: <Root/>,
      children:[
        {
          path: "",
          element: <Planning />,
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
      path: "/registry",
      element: <Root/>,
      children:[
        {
          path: "",
          element: <Registry />,
        },
      ],
    },
    {
      path: "/rsvp",
      element: <Root/>,
      children:[
        {
          path: "",
          element: <Rsvp />,
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
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "*",
          element: <NotFound />
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
