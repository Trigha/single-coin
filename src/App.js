// import logo from './logo.svg';
import './App.css';
import Heading from './component/head';
import Content from './component/content';
import Home from './component/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div>
        <Heading />
        <Switch>
          <Route path="./component/Home" component={Home} />
          <Route path="./component/content" component={Content} />
        </Switch>
        <Content />
      </div>
    </Router>
  );
}

export default App;
