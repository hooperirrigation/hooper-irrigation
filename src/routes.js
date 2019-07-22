import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Meetings from './components/Meetings/Meetings'
import Schedules from './components/Schedules/Schedules'
import About from './components/About/About'
export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/meetings' component={Meetings}/>
        <Route path='/schedules' component={Schedules}/>
    </Switch>
)