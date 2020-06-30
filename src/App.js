import React from 'react';
import './App.css';
import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material.js'
import {Layout, Header, Drawer, Navigation, Content} from "react-mdl";
import Main from './components/Main'
import {Link} from "react-router-dom";



function App() {
  return (
        <Layout >
            <Header className={"header-color"} title={<Link style={{textDecoration: 'none', color: 'white'}} to={"/"}>Home</Link>} scroll>
                <Navigation >
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration: 'none', color: '#1CB5E0'}} to={"/"}>Home</Link>}>
                <Navigation className={"navLinks"}>
                    <Link style={{color: '#56CCF2'}} to="/resume">Resume</Link>
                    <Link style={{color: '#56CCF2'}} to="/aboutme">About Me</Link>
                    <Link style={{color: '#56CCF2'}} to="/projects">Projects</Link>
                    <Link style={{color: '#56CCF2'}} to="/contact">Contact</Link>
                    <Link style={{color: '#56CCF2'}} to="/join">Chat</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                {/*Get router info*/}
                <Main></Main>
            </Content>
        </Layout>
  );
}

export default App;
