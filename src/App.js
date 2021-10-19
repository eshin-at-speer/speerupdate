import react from "react";
import {Switch,Route} from 'react-router-dom'
import Home from "./Pages/Home";




function App() {
  return (
    <Switch>
      <Route to='/'>
        <Home/>
      </Route>
    </Switch>
  );
}

export default App;
