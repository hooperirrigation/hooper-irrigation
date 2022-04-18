import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Schedules from './components/Schedules/Schedules'
import About from './components/About/About'
import PubsForms from './components/PubsForms/PubsForms'
export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/schedules' component={Schedules}/>
        <Route path='/pubsandforms' component={PubsForms}/>
    </Switch>
)