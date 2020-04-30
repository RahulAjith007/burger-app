import React from 'react';
import classes from './BuildControl.css'
    


const BuildControl = (props) => (
    <div className= {classes.BuildControl}>
        <div classname = {classes.Label}>{props.label} </div>
            <button disabled = {props.disabled} onClick = {props.removed} className= {classes.Less}>Less</button>
            <button onClick = {props.added} className= {classes.More}>More</button>
    </div>
)

export default BuildControl