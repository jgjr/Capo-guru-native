import React, { Component } from 'react';
import { StyleSheet, View, Text, Modal, TouchableHighlight, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const styles = StyleSheet.create({
    modal: {
        flex: 1,
        padding: 10,
    },
    modalInner: {
        flex: 1,
        position: 'relative',
    },
    closeModalIcon: {
        position: 'absolute',
        top: 6,
        left: 6,
        fontSize: 35,
        color: '#888',
        position: 'relative',
        top: 5,
        zIndex: 2
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        position: 'absolute',
        top: 16,
        left: 0,
        right: 0,
        zIndex: 1
    }
});

class Popup extends Component {

    render() {
        return (
            <Modal
                animationType='slide'
                transparent={false}
                presentationStyle='formSheet' 
                visible={this.props.visible}
                onRequestClose={() => this.props.toggle()}
            >
                <View style={styles.modal}>
                    <Icon onPress={() => this.props.toggle()} style={styles.closeModalIcon} name='ios-arrow-back'></Icon>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <View style={styles.modalInner}>
                        {this.props.children}
                    </View>
                </View>
            </Modal>
        );
    }

}

export default Popup;
