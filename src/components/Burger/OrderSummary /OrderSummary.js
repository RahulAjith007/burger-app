import React from 'react';
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'

export default class OrderSummary extends React.Component {

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igkey => {
            return (
                <li key = {igkey}>
                    <span style = {{textTransform:'capitalize'}}>{igkey}</span>: {this.props.ingredients[igkey]}
                </li>
            )
        })
    return(
    <Aux>
        <h3>Your Order</h3>
        <p>A delecious burger with following ingredients: </p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType='Danger' clicked={this.props.purchaseCancelled}>Cancel</Button>
        <Button btnType='Success' clicked={this.props.purchaseContinued}>Continue</Button>
    </Aux>
    )
    }
   
};

