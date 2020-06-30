import React, {Component} from 'react'
import {Grid, Cell} from "react-mdl";

class Education extends Component {
    render(){
        return(
            <Grid>
                <Cell style={{align: 'right'}}>
                    <p style={{paddingRight: '6rem', textAlign: 'right'}}>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>

                <Cell>
                    <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
                    <p>{this.props.schoolDescription}</p>
                    <br/>
                    <p>{this.props.schoolDescription2}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Education