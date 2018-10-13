import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View, ScrollView, AsyncStorage  } from 'react-native';
import { COLOR } from 'react-native-material-ui';
import { Sequence, defaultOpenChords } from 'guitar-chord-sequence';
import Menu from './components/Menu';
import Helper from './components/Helper';
import AddChord from './components/AddChord';
import OriginalChords from './components/OriginalChords';
import CapoPositions from './components/CapoPositions';
import PossibleKeys from './components/PossibleKeys';
import Settings from './components/Settings';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
});

export default class App extends Component {

    constructor(props) {
        super(props);
        let sequence = new Sequence([]);
        let openChords = new Sequence(defaultOpenChords);
        let visited = false;
        this.state = {
            sequence: sequence,
            openChords: openChords,
            settingsOpen: false,
            helperActive: false,
            helperStep: 0,
            visited: visited
        }
    }

    componentDidMount() {
        this.getLocalStorageItems();
    }

    async getLocalStorageItems() {
        const sequenceData = await AsyncStorage.getItem('@CapoGuruStore:sequence');
        const openChordsData = await AsyncStorage.getItem('@CapoGuruStore:openChords');
        let sequence = this.state.sequence;
        let openChords = this.state.openChords;
        let visited = false;
        if (sequenceData != null) {
            sequence = new Sequence(JSON.parse(sequenceData));
            visited = true;
        }
        if (openChordsData != null) {
            openChords = new Sequence(JSON.parse(openChordsData));
            visited = true;
        }
        this.setState({
            sequence: sequence,
            openChords: openChords,
            visited: visited
        });
    }

    async updateSequence(sequence) {
        await AsyncStorage.setItem('@CapoGuruStore:sequence', JSON.stringify(sequence.chords));
        this.setState(
            {sequence: sequence}
        );
    }

    async updateOpenChords(sequence) {
        await AsyncStorage.setItem('@CapoGuruStore:openChords', JSON.stringify(sequence.chords));
        this.setState(
            {openChords: sequence}
        );
    }

    addChord(chord) {
        this.updateSequence(this.state.sequence.addChord(chord));
    }

    removeChord(index) {
        this.updateSequence(this.state.sequence.removeChordByIndex(index));
    }

    clearChords() {
        this.updateSequence(new Sequence([]));
    }

    toggleSettings() {
        this.setState({settingsOpen: !this.state.settingsOpen});
    }

    toggleHelp() {
        if (!this.state.help && !this.state.sequence.chords.length) {
            this.updateSequence(new Sequence([
                    {root: 'C', type: 'maj'},
                    {root: 'A', type: 'min'},
                    {root: 'F', type: 'maj'},
                    {root: 'G', type: 'maj'},
                ])
            );
        }
        this.setState({
            helperActive: !this.state.helperActive,
            visited: true,
            helperStep: 0
        });
    }

    changeHelperStep(index) {
        this.setState({helperStep: index});
    }

    containerStyles() {
        let styles = {flex: 1};
        if (this.state.helperActive) {
            styles.backgroundColor = '#888888';
        } else {
            styles.backgroundColor = '#f4f4f4';
        }
        return styles;
    }

    render() {
        return (
            <ScrollView style={this.containerStyles()}>
                <StatusBar backgroundColor='rgba(0, 0, 0, 0.2)' translucent />
                <View style={{ backgroundColor: COLOR.blue500, height: 24 }} />
                <Menu toggleSettings={() => this.toggleSettings()} toggleHelp={() => this.toggleHelp()} /> 
                <Helper 
                    active={this.state.helperActive} 
                    toggleHelp={() => this.toggleHelp()} 
                    sequenceLength={this.state.sequence.chords.length} 
                    visited={this.state.visited}
                    step={this.state.helperStep}
                    changeStep={(index) => this.changeHelperStep(index)}
                >
                    <AddChord 
                        add={(chord) => this.addChord(chord)} 
                        clear={() => this.clearChords()} 
                        length={this.state.sequence.chords.length} 
                        helperIndex={0}
                    />
                    <OriginalChords 
                        sequence={this.state.sequence} 
                        removeChord={(index) => this.removeChord(index)} 
                        alreadyOpen={this.state.sequence.isOpen(this.state.openChords)}
                        helperIndex={1}
                    />
                    <CapoPositions 
                        positions={this.state.sequence.findOpenPositions(this.state.openChords)} 
                        helperIndex={2}
                    />
                    <PossibleKeys 
                        keys={this.state.sequence.findKeys()} 
                        helperIndex={3}
                    />
                </Helper>
                <Settings 
                    visible={this.state.settingsOpen} 
                    toggle={() => this.toggleSettings()} 
                    openChords={this.state.openChords} 
                    replaceOpenChords={(sequence) => this.updateOpenChords(sequence)}
                />
            </ScrollView>
        );
    }

}

