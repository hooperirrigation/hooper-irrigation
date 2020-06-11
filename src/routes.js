import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Schedules from './components/Schedules/Schedules'
import About from './components/About/About'
import Bylaws from './components/Bylaws/Bylaws'
import Specs from './components/Specs/Specs.js'
import Service from './components/Service/Service.js'
export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/schedules' component={Schedules}/>
        <Route path='/bylaws' component={Bylaws}/>
        <Route path='/specs' component={Specs}/>
        <Route path='/service' component={Service}/>
    </Switch>
)