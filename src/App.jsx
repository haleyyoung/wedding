import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import GlobalNavbar from './GlobalNavbar.js';
import Content from './Content.jsx';
import DayOf from './DayOf.jsx';
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
        {
          path: "day-of",
          element: <DayOf />,
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