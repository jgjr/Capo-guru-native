import React, { Component  } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-material-ui';

const styles = StyleSheet.create({
    Inner: {
        padding: 10
    },
    Title: {
        marginBottom: 12,
        fontSize: 22,
    }
});

class Section extends Component {

    render() {
        if (this.props.activeHelpStep) {
            outerStyles = {
                marginVertical: 6,
                zIndex: 3
            }
        } else {
            outerStyles = {
                marginVertical: 6,
                zIndex: 1
            }
        }
        return (
            <View style={outerStyles}>
                <Card>
                    <View style={styles.Inner}>
                        { this.props.title ? <Text style={styles.Title}>{this.props.title}</Text> : null }
                        {this.props.children}
                    </View>
                </Card>
            </View>
        );
    }

}

export default Section;
