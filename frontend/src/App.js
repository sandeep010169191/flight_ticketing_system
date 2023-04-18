import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './components/Homepage/Homepage'
import RouteSelection from './components/RouteSelection/RouteSelection'
import LogOrsign from './components/Login-Signup/LogOrsign'
import Signup from './components/Login-Signup/Signup' 

import TicketPage from './components/TicketPage/TicketPage'
import CancelPage from './components/CancelPage/CancelPage'
import CompletedPage from './components/CompletedTrip/CompletedTrip'
import UpcomingPage from './components/TicketPage/TicketPage'
import CancelledPage from './components/CancelledTicket/CancelledTicket'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact render={props => <Homepage {...props} />} />
          <Route path="/login" render={props => <LogOrsign {...props} />} />
          <Route path="/register" render={props => <Signup {...props} />} />
          <Route path="/routes" exact render={props => <RouteSelection {...props} />} />          
          <Route path="/getTicket" exact render={props => <TicketPage {...props} />} />
          <Route path="/cancelPage" exact render={props => <CancelPage {...props} />} />
          <Route path="/completedPage" exact render={props => <CompletedPage {...props} />} />
          <Route path="/upcomingPage" exact render={props => <UpcomingPage {...props} />} />
          <Route path="/cancelledPage" exact render={props => <CancelledPage {...props} />} />
          
        </Switch>

      </Router>
    </div>

  );
}

export default App;
