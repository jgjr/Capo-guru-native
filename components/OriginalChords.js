import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ChordChip from './ChordChip';
import HelperText from './HelperText';
import Overlay from './Overlay';
import Section from './Section';

const styles = StyleSheet.create({
    ChipContainer: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection:'row',
    },
    OpenText: {
        position: 'absolute',
        top: 16,
        right: 20,
        color: '#2e972e'
    }
});

class OriginalChords extends Component {

    title() {
        if (this.props.sequence.chords.length == 0) {
            return 'Add a chord above';
        } else if (this.props.sequence.chords.length == 1) {
            return 'Original chord';
        } else {
            return 'Original chords';
        }
    }

    render() {
        return (
            <Fragment>
                <Section title={this.title()} activeHelpStep={this.props.activeHelpStep}>
                    { this.props.alreadyOpen ? <Text style={styles.OpenText}>✓ open</Text> : null }
                    <View style={styles.ChipContainer}>
                        {this.props.sequence.fullChords().map((chord, index) => {
                            return <ChordChip removable key={index} chord={chord.string} removeChord={() => this.props.removeChord(index)} />
                        })}
                    </View>
                    <Overlay active={this.props.helperActive && !this.props.activeHelpStep} />
                </Section>
                <HelperText active={this.props.activeHelpStep} button="Next" action={() => this.props.changeStep(2)}>
                    Here is your chord sequence. You can always add more chords using the box above, and you can remove individual chords by clicking on the 'x' next to their name. If your chord sequence can already be played using open chords you will see a little green tick above.
                </HelperText>
            </Fragment>
        );
    }

}

export default OriginalChords;
