import logo from './logo.svg';
import './App.scss';
import GlobalNavbar from './GlobalNavbar.js';
import Content from './Content.jsx';
import ParallaxTest from './ParallaxTest.jsx';

function App() {
  return (
    <div className="App">
      <title>Garrison and Haley</title>
      <header>
        <title>Garrison and Haley</title>
      </header>
      <body>
        <GlobalNavbar/>
        <Content/>
      </body>
    </div>
  );
}

export default App;
