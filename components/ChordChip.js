import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    chip: {
        height: 32,
        marginTop: 0,
        marginRight: 5,
        marginBottom: 5,
        marginLeft: 0,
        borderRadius: 16,
        backgroundColor: '#e0e0e0',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection:'row',
    },
    textWithButton: {
        color: '#454545',
        paddingLeft: 12,
        paddingRight: 6, 
        fontSize: 14,
    },
    textWithoutButton: {
        color: '#454545',
        paddingHorizontal: 12,
        fontSize: 14,
    },
    iconWrapper: {
        marginRight: 4,
    },
    icon: {
        color: '#b8b8b8',
        fontSize: 26,
    }
});

class ChordChip extends Component {

    render() {
        if (this.props.removable) {
            return (
                <View style={styles.chip}>
                    <Text style={styles.textWithButton}>{this.props.chord}</Text>
                    <View style={styles.iconWrapper} >
                        <Icon onPress={this.props.removeChord} style={styles.icon} name="md-close-circle"></Icon>
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.chip}>
                    <Text style={styles.textWithoutButton}>{this.props.chord}</Text>
                </View>
            )
        }
    }

}

export default ChordChip;
