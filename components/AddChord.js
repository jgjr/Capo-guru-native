import React, { Component, Fragment  } from 'react';
import { StyleSheet, View, Picker } from 'react-native';
import { Card, Button } from 'react-native-material-ui';
import HelperText from './HelperText';
import Overlay from './Overlay';
import Section from './Section';

class AddChord extends Component {

    state = {
        chord: null,
        type: null
    };

    addChord() {
        if (this.state.chord !== null && this.state.type !== null) {
            this.props.add({num: this.state.chord, type: this.state.type});
            this.setState({
                chord: null,
                type: null
            });
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Section title="Add a chord" activeHelpStep={this.props.activeHelpStep}>
                    <Picker
                        selectedValue={this.state.chord}
                        style={{ height: 60, width: '100%' }}
                        onValueChange={(itemValue) => this.setState({chord: itemValue})}>
                        <Picker.Item label='Chord root' value={null} />
                        <Picker.Item label='A' value={0} />
                        <Picker.Item label='A#/Bb' value={1} />
                        <Picker.Item label='B' value={2} />
                        <Picker.Item label='C' value={3} />
                        <Picker.Item label='C#/Db' value={4} />
                        <Picker.Item label='D' value={5} />
                        <Picker.Item label='D#/Eb' value={6} />
                        <Picker.Item label='E' value={7} />
                        <Picker.Item label='F' value={8} />
                        <Picker.Item label='F#/Gb' value={9} />
                        <Picker.Item label='G' value={10} />
                        <Picker.Item label='G#/Ab' value={11} />
                    </Picker> 
                    <Picker
                        selectedValue={this.state.type}
                        style={{ height: 60, width: '100%' }}
                        onValueChange={(itemValue) => this.setState({type: itemValue})}>
                        <Picker.Item label='Chord type' value={null} />
                        <Picker.Item label='Major' value='maj' />
                        <Picker.Item label='Minor' value='min' />
                        <Picker.Item label='7' value='7' />
                        <Picker.Item label='Minor 7' value='min7' />
                        <Picker.Item label='Major 7' value='maj7' />
                    </Picker> 
                    <View style={{marginBottom: 6}}>
                        <Button
                            raised primary
                            onPress={() => this.addChord()}
                            text='Add chord'
                            disabled={this.state.chord == null || this.state.type == null}
                        />
                    </View>
                    <View style={{zIndex: 1, overflow: 'visible'}}>
                        <Button
                            raised
                            onPress={() => this.props.clear()}
                            text='Clear all'
                            disabled={this.props.length == 0}
                        />
                    </View>
                    <Overlay active={this.props.helperActive && !this.props.activeHelpStep} />
                </Section>
                <HelperText active={this.props.activeHelpStep} button="Next" action={() => this.props.changeStep(1)}>
                    We are going to input a chord sequence one chord at a time. You can add your chords here. First select the root of the chord, then the type (for exa    mple, an 'A' chord will be 'A' and then 'Major', a 'D# Minor 7' chord will be 'D#/Eb' and then 'Min7'), then click 'Add'. To remove all your chords click 'Clear all'.
                </HelperText>
            </Fragment>
        );
    }

}

export default AddChord;
