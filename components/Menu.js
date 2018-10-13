import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

class Menu extends Component {

    press(item) {
        if (item.index == 0) {
            this.props.toggleSettings();
        } else if (item.index == 1) {
            this.props.toggleHelp();
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <View style={{zIndex: 3}}>
                <Toolbar
                    centerElement='Capo guru'
                    rightElement={{
                        menu: {
                            icon: 'more-vert',
                            labels: ['Settings', 'Help']
                        }
                    }}
                    onRightElementPress={(item) => this.press(item)}
                />
            </View>
        );
    }

}

export default Menu;
