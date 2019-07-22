import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Meetings from './components/Meetings/Meetings'
import Timecard1 from './components/Timecards/Timecard1'
import Timecard2 from './components/Timecards/Timecard2'
import Timecard3 from './components/Timecards/Timecard3'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/meetings' component={Meetings}/>
        <Route path='/timecard1' component={Timecard1}/>
        <Route path='/timecard2' component={Timecard2}/>
        <Route path='/timecard3' component={Timecard3}/>
        <Route path='/contact' component={Contact}/>
    </Switch>
)