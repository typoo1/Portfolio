import React, {Component} from 'react'
import {Grid, Cell, List, ListItem, ListItemContent} from "react-mdl";

class Contact extends Component {
    render() {
        return(
            <div className={"contact-body"}>
                <Grid className={"contact-grid"}>
                    {/*left side*/}
                    <Cell col={6}>
                        <h2 style={{paddingBottom: '2rem'}}>Tye Gallagher</h2>
                        <img
                            src={"https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"}
                            alt={"avatar"}
                            style={{height: '250px'}}
                            />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Feel free to reach out to me through email or phone</p>
                    </Cell>
                    {/*right side*/}
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className={"contact-list"}>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Roboto'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (575) 791-2343</ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Roboto'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        tyeg@outlook.com</ListItemContent>
                                </ListItem>

                                {/*<ListItem>*/}
                                    {/*<ListItemContent style={{fontSize: '25px', fontFamily: 'Roboto'}}>*/}
                                        {/*<i className="fa fa-phone-square" aria-hidden="true"/>*/}
                                        {/*(575) 791-2343</ListItemContent>*/}
                                {/*</ListItem>*/}
                            </List>
                        </div>



                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact