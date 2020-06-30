import React, {Component} from 'react'
import {Grid, Cell} from "react-mdl";
import Me from './images/Me.png'

class Landing extends Component {
    render() {
        return(
            <div style={{overflow: 'auto', height: 'inherit', margin: 'auto'}}>
                <Grid className={"landing-grid"}>
                    <Cell col={12}>
                        <img
                            src={Me}
                            alt={"avatar"}
                            className={"avatar-img"}
                        />
                        <div className={"banner-text"}>
                            <h1>Full Stack Web Developer</h1>

                            <hr/>

                            <p>HTML/CSS | Python | Javascript | React | SQLite | Flask</p>

                            <div className={"social-links"}>

                                {/*LinkedIn*/}
                                <a style={{paddingRight: '1rem', paddingLeft: '1rem'}} href={"https://www.linkedin.com/in/tye-gallagher-36524259/"} rel={"noopener noreferrer"} target={"_blank"}>
                                    <i className={"fa fa-linkedin-square"}  aria-hidden={"true"} />
                                </a>

                                {/*Github*/}
                                <a style={{paddingRight: '1rem', paddingLeft: '1rem'}} href={"https://github.com/typoo1"} rel={"noopener noreferrer"} target={"_blank"}>
                                    <i className={"fa fa-github-square"}  aria-hidden={"true"} />
                                </a>

                                {/*Outlook*/}
                                <a style={{paddingRight: '1rem', paddingLeft: '1rem'}} href={"mailto:tyeg@outlook.com"} rel={"noopener noreferrer"} target={"_blank"}>
                                    <i className={"fa fa-envelope"}  aria-hidden={"true"} />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing