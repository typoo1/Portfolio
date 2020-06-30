import React from 'react';
import {Switch, Route} from "react-router-dom";

import LandingPage from './Landingpage'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import Aboutme from './Aboutme'
import Join from './Join/Join'
import Chat from './Chat/Chat'

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/join" component={Join} />
        <Route path="/chat" component={Chat} />
    </Switch>
)

export default Main