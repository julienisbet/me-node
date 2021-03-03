import {
  BrowserRouter as Router,
  Route } from "react-router-dom";
import Home from "./Home";
import Timeline from "./Timeline";
import Bio from "./Bio";
import './App.scss';

function App(){
  return (
    <Router>
      <div>
        <Home/>
        <Route exact path="/" component={Bio} />
        <Route exact path="/timeline" component={Timeline} />
      </div>
    </Router>
  );
}
export default App;