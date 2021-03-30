import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './client/Header/Header'
import About from './client/Header/NavLinks/About/About'
import Dashboard from './client/MainContent/Dashboard/Dashboard'
import Login from './client/Header/NavLinks/LogIn/LogIn'


function App() {
  
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
        </Switch>
      
    </div>
  );
}

export default App;
