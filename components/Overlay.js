import React, { Component } from 'react';
import { View } from 'react-native';


class Overlay extends Component {

    getStyles() {
        if (this.props.active) {
            return {
                position: 'absolute',
                top: 0, 
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 2,
                opacity: .4,
                backgroundColor: '#000000'
            };
        } else {
            return {display: 'none'};
        }
    }

    render() {
        return (
            <View style={this.getStyles()}></View>
        );
    }

}

export default Overlay;

