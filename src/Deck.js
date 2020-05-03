import React from 'react';
import{
    Text,
    View,
    StyleSheet
}from 'react-native';



export default class Deck extends React.Component{

    renderCards(){
        return this.props.data.map(item => {
            return this.props.renderCard(item)
        });
    }


    render(){
        return(
            <View>
            <Text style={{}}>{this.renderCards()}</Text>
            </View>
        );
    };
}


const styles = StyleSheet.create({

});