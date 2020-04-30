import React from 'react';
import Logo from '../../Logo/logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer,classes.Close]
    if (props.open) {
        attachedClasses = [classes.SideDrawer,classes.Open]
    }
    return(
        <Aux>
        <BackDrop show={props.open} clicked ={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <Logo height = "11%" marginBottom = '32px'/>
            <nav>
                <NavigationItems/> 
            </nav>
        </div>
        </Aux>
    );
}

export default SideDrawer;