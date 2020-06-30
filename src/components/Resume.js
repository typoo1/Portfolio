import React, {Component} from 'react';
import {Grid, Cell} from "react-mdl";
import Education from './Education';
import Experience from './Experience';

class Resume extends Component {
    render() {
        return(
            <Grid className={"resume-grid"}>
                {/*Left Cell*/}
                <Cell className={"resume-left-col"} col={3}>
                    <div style={{textAlight: 'center'}}>
                        <img
                            src={"https://cdn2.iconfinder.com/data/icons/avatars-vol-1-glyph/64/glyph-avatar-beard-shades-cool-512.png"}
                            alt={"avatar"}
                            style={{height: '200px'}}
                        />
                    </div>

                    <h2 style={{paddingTop: '2em'}}>Tye Gallagher</h2>
                    <h4 style={{color: 'grey'}}>Programmer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                    <h5>Address</h5>
                    <p>3229 Covina St, New Port Richey, Fl 34655-3404, USA</p>
                    <h5>Phone</h5>
                    <p>(575) 791-2343</p>
                    <h5>Email</h5>
                    <p>tyeg@outlook.com</p>
                </Cell>

                {/*Right cell*/}
                <Cell className={"resume-right-col"} col={9}>
                    <h2>Education</h2>
                    <Education
                        startYear={2012}
                        endYear={2019}
                        schoolName={"Eastern New Mexico University"}
                        schoolDescription={"Graduated with a bachelor's of science in computer science with a focus on data processing and analysis"}

                        schoolDescription2={"Coordinated with department leads to create software tools for protein analysis. " +
                                "Lead a team to build software which interfaced with 3rd party machinery and compiled advanced multidimensional data points into a usable format."}
                    />
                    <hr style={{borderTop: '3px solid #e22947'}}/>
                    <h2>Work History</h2>
                    <Experience
                        startMonth={"April"}
                        startYear={2017}
                        endMonth={"Present"}

                        jobName={"IT Technician"}
                        jobDescription={"Created automation tools that were distributed to all Seaworld parks & Entertainment locations nationwide to expedite reporting procedures. " +
                        "Responsible for maintaining thousands of devices ranging from cell phones to Cisco switches. " +
                        "Able to explain complex technologies in an easily understandable way to consumers to enhance their use of those technologies. " +
                        "Qualified to work on systems highly sensitive to time and security flaws."}
                    />
                </Cell>
            </Grid>


        )
    }
}

export default Resume