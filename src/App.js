import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from "react-router-dom"; 

import HomePage from './pages/home-page/HomePage';
import Header from "./components/header/Header";
import GamePage from "./components/GamePage/GamePage";
import OrderPage from './components/OrderPage/OrderPage';

function App() {
  return (
    <div className='App'>
      <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/app/:title">
            <GamePage />
          </Route>
          <Route exact path="/order">
            <OrderPage />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
