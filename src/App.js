import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from "./pages/Login";
import Home from './pages/Home';
import User from './pages/User';

function App() {

  const Routing = () =>{
    return(
      <Switch>
        <Route exact path = "/login" component = {Login}/>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/user" component = {User}/>
      </Switch>
    )
  }

  return (
    <Router>
      <Routing/>
    </Router>
  );
}

export default App;
