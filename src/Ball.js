import React from 'react';
import {
    Text,
    View,
    Animated,
    StyleSheet
}from 'react-native';

export default class Ball extends React.Component{
componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position,{
        toValue: {x:200, y:500}
    }).start();
}


    render(){
        return(
            <Animated.View style = {this.position.getLayout()}>
                <View style = {styles.ball}/>
                </Animated.View>
        );
    };
};

const styles = StyleSheet.create({
    ball:{
        height:60,
        width:60,
        borderColor:'red',
        borderRadius:30,
        borderWidth:30
    }
});