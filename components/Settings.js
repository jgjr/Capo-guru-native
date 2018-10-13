import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Checkbox } from 'react-native-material-ui';
import Popup from './Popup';

const styles = StyleSheet.create({
    paragraph: {
        marginVertical: 40,
        marginHorizontal: 20
    }
});

class Settings extends Component {

    handleClose() {
        this.props.close();
    }

    toggleChord(chord) {
        const openChords = this.props.openChords;
        let newChords = {};
        if (openChords.containsChord(chord)) {
            newChords = openChords.removeChord(chord);
        } else {
            newChords = openChords.addChord(chord);
        }
        this.props.replaceOpenChords(newChords);
    }

    render() {
        return (
            <Popup title='Settings' visible={this.props.visible} toggle={() => this.props.toggle()}>
                <ScrollView>
                    <Text style={styles.paragraph}>
                    You might want to change the chords that are considered 'open'. Here you can toggle a few chords that are commonly played open, despite requiring a barre of some sort.
                    </Text>
                    <Checkbox 
                        label='F' 
                        value='1' 
                        checked={this.props.openChords.containsChord({num: 8, type: 'maj'})} 
                        onCheck={() => this.toggleChord({num: 8, type: 'maj'})}
                    />
                    <Checkbox 
                        label='A# / Bb min' 
                        value='1' 
                        checked={this.props.openChords.containsChord({num: 1, type: 'min'})} 
                        onCheck={() => this.toggleChord({num: 1, type: 'min'})}
                    />
                    <Checkbox 
                        label='B min' 
                        value='1' 
                        checked={this.props.openChords.containsChord({num: 2, type: 'min'})} 
                        onCheck={() => this.toggleChord({num: 2, type: 'min'})}
                    />
                </ScrollView>
            </Popup>
        );
    }

}

export default Settings;
