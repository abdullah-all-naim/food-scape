import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import HomePage from './HomePage/HomePage';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';

function App() {
  return (
    <BrowserRouter>
      {/* <Navigation></Navigation> */}
      <Route exact path="/" component = {HomePage} />
      <Route exact path="/home" component = {Navigation} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/login' component={Login} />
    </BrowserRouter>
  );
}

export default App;
