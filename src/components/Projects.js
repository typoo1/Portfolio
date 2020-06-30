import React, {Component} from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from "react-mdl";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className={"cards"}>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background:
                            'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}>TyeNet</CardTitle>
                        <CardText>
                            This is it! This whole website was built from scratch using react, have a look around or check out the code on github!
                        </CardText>
                        <CardActions border>
                            <Button href={""} colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{colr: '#fff'}}>
                            <IconButton name={"share"} color={"black"}/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background:
                                'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}>Live chatrooms</CardTitle>
                        <CardText>
                            This is a live chatroom that I built to work as part of this website using a separate server interaction.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{colr: '#fff'}}>
                            <IconButton name={"share"} color={"black"}/>
                        </CardMenu>
                    </Card>

                    {/*<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>*/}
                        {/*<CardTitle style={{color: '#fff', height: '176px', background:*/}
                                {/*'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}>React Project #1</CardTitle>*/}
                        {/*<CardText>*/}
                            {/*This is nonsense, please disregard*/}
                        {/*</CardText>*/}
                        {/*<CardActions border>*/}
                            {/*<Button colored>GitHub</Button>*/}
                            {/*<Button colored>Codepen</Button>*/}
                            {/*<Button colored>Live Demo</Button>*/}
                        {/*</CardActions>*/}
                        {/*<CardMenu style={{colr: '#fff'}}>*/}
                            {/*<IconButton name={"share"} color={"black"}/>*/}
                        {/*</CardMenu>*/}
                    {/*</Card>*/}
                </div>
            )
        }
        else if(this.state.activeTab === 1){
                return(
                    <div className={"cards"}>
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background:
                                    'url(https://i.pinimg.com/originals/0f/60/19/0f6019e15f1d8ae07e7e8ea16d242676.png) center / cover'}}>Protien Processor</CardTitle>
                            <CardText>
                                Easily my favorite and most interesting project to date. This is a flask based webpage that helps to automate the processing of large data files and archive them in a database to be used in biochemistry research. Read more about it on the github page.
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color: 'black'}}>
                                <IconButton name={"share"}/>
                            </CardMenu>
                        </Card>

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background:
                                    'url(https://i.pinimg.com/originals/0f/60/19/0f6019e15f1d8ae07e7e8ea16d242676.png) center / cover'}}>Webpage2Wordcloud</CardTitle>
                            <CardText>
                                This is a small project I worked on that creates a word cloud image from a passed URL based on the frequency of words on the given webpage. It's complete with a functional UI and some save options.
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color: 'black'}}>
                                <IconButton name={"share"}/>
                            </CardMenu>
                        </Card>

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background:
                                    'url(https://i.pinimg.com/originals/0f/60/19/0f6019e15f1d8ae07e7e8ea16d242676.png) center / cover'}}>SpeedTAG</CardTitle>
                            <CardText>
                                This is an automation tool I developed to process daily reports. It links with the currently logged in outlook account, and looks for the pertinent emails, filters the information in them, and generates Service Now incidents for any problems reported.
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color: 'black'}}>
                                <IconButton name={"share"}/>
                            </CardMenu>
                        </Card>

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background:
                                    'url(https://i.pinimg.com/originals/0f/60/19/0f6019e15f1d8ae07e7e8ea16d242676.png) center / cover'}}>DKPManager</CardTitle>
                            <CardText>
                                This program creates a database which is accessed via a simple UI to track points and their use for multiplayer games like World of Warcraft.
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color: 'black'}}>
                                <IconButton name={"share"}/>
                            </CardMenu>
                        </Card>
                    </div>
                    )
            }
            else if(this.state.activeTab === 2){
                return(
                    <div className={"cards"}>
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background:
                                    'url(https://4.bp.blogspot.com/-gTiw6OELPy0/XJorCue1joI/AAAAAAAACkA/mII85pOuZKYLQlFx6wjkxgkJYrULjv4hQCLcBGAs/s1600/java.png) center / cover'}}>A Star Puzzle Solver</CardTitle>
                            <CardText>
                                A simple java program that impliments the astar algorithm to solve some text based puzzles.
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color: 'black'}}>
                                <IconButton name={"share"}/>
                            </CardMenu>
                        </Card>

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background:
                                    'url(https://4.bp.blogspot.com/-gTiw6OELPy0/XJorCue1joI/AAAAAAAACkA/mII85pOuZKYLQlFx6wjkxgkJYrULjv4hQCLcBGAs/s1600/java.png) center / cover'}}>Virtual Operating System</CardTitle>
                            <CardText>
                                A program that emulates some of the basic features of an early operating system, like queueing up tasks, writing data, ect.
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color: 'black'}}>
                                <IconButton name={"share"}/>
                            </CardMenu>
                        </Card>

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background:
                                    'url(https://4.bp.blogspot.com/-gTiw6OELPy0/XJorCue1joI/AAAAAAAACkA/mII85pOuZKYLQlFx6wjkxgkJYrULjv4hQCLcBGAs/s1600/java.png) center / cover'}}>Page Fault Predictor</CardTitle>
                            <CardText>
                                This program determines the number of page faults that will be produced by a randomly generated input.
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color: 'black'}}>
                                <IconButton name={"share"}/>
                            </CardMenu>
                        </Card>
                    </div>
                )
            }
    }

    render() {
        return(
            <div className={"category-tabs"}>
                <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({activeTab: tabID})} ripple>
                    <Tab>React</Tab>
                    <Tab>Python</Tab>
                    <Tab>Java</Tab>
                </Tabs>

                <section className={"projects-grid"}>
                    <Grid className={"projects-grid"}>
                        <Cell col={12}>
                            <div className={"content"}>{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects