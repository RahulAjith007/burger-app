import React from 'react';
import classes from './CheckoutSummary.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const CheckoutSummary = (props) => {
    return(
        <div className={classes.CheckoutSummary}>
        <div>WE HOPE IT TASTES WELL</div>
        <div style={{width:'100%', margin:'auto'}}>
            <Burger ingredients={props.ingredients}/>
            <Button clicked={props.checkoutCancelled} btnType="Danger">CANCEL</Button>
            <Button clicked={props.checkoutContinue} btnType='Success'>CONTINUE</Button>
        </div>
        </div>
    )
}

export default CheckoutSummary