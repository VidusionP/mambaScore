import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import PlayerList from './pages/Players/PlayerList/Playerlist'
import PlayerStats from './pages/Players/PlayerStats/PlayerStats'
import PlayerCompare from './pages/Players/PlayerComparison/PlayerCompare'
import TeamList from './pages/TeamList/Teamlist'
import Teamcard from './pages/TeamCard/Teamcard'
import TeamRoster from './pages/TeamRoster/Teamroster'
import TeamStanding from './pages/TeamStanding/Standing'
import Division from './pages/TeamStanding-Div/Standing'
import Schedule from './components/TestONLY/Test'
import Kobe from './pages/Kobe/Kobe'
import Scroll from './components/Scoll/Scroll'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/players" exact component={PlayerList} />
          <Route path="/players/:id/compare/:id2" exact component={PlayerCompare} />
          <Route path="/players/:id" component={PlayerStats} />
          <Route exact path="/players/:id2" component={PlayerList} />
          <Route path="/teams" exact component={TeamList} />
          <Route exact path="/teams/:id2/:id" component={Teamcard} />
          <Route path="/teams/:id2/:id/roster" component={TeamRoster} />
          <Route path="/teams/standing" component={TeamStanding} />
          <Route path="/teams/standing-div" component={Division} />
          <Route path="/schedule/:id" component={Schedule} />
          <Route path="/kobe" component={Kobe} />
        </Switch>
        <Scroll/>
      </Router>
    </div>
  );
}

export default App;
