import './App.css';
import {BrowserRouter, Route, Switch } from "react-router-dom" 
import Landing from './Views/Landing/Landing';
import Create from './Views/Create/Create';
import Home from './Views/Home/Home';
import Detail from './Views/Detail/Detail';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={["/create", "/home", "/detail/:id"]} component={Navbar} />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/create" component={Create} />
          <Route path="/home" component={Home} />
          <Route path="/detail/:id" component={Detail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;






