import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Body from './components/Body';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/superheroes" component={Body}/> 
        <Redirect to="/superheroes" />
      </Switch>
    </Router>
  );
}

export default App;
